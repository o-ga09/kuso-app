"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  useDisclosure,
} from "./common/components";
import { SearchButton } from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchModal from "./components/SearchModal";
import { Monster, Title, monsters, titles } from "./lib/const";
import Image from "next/image";

export default function Home() {
  // リストラ経験者
  const target1 = monsters.filter((monster) => {
    return titles.some((title) => monster[title.key as keyof Monster] === 0);
  });

  // 皆勤賞組
  const isKaikins = monsters.filter((item) => !target1.includes(item));

  // MHW以降のモンスター
  const NewMonsters = monsters.filter((monster) => {
    return titles.some(
      (title) =>
        monster["MHW" as keyof Monster] === 2 ||
        monster["MHWI" as keyof Monster] === 2 ||
        monster["MHR" as keyof Monster] === 2 ||
        monster["MHRS" as keyof Monster] === 2
    );
  });

  // MHX以降のモンスター
  const NewMonsters2 = monsters.filter((monster) => {
    return titles.some(
      (title) =>
        monster["MHW" as keyof Monster] === 2 ||
        monster["MHWI" as keyof Monster] === 2 ||
        monster["MHR" as keyof Monster] === 2 ||
        monster["MHRS" as keyof Monster] === 2 ||
        monster["MHX" as keyof Monster] === 2 ||
        monster["MHXX" as keyof Monster] === 2
    );
  });

  // MH3以降のモンスター
  const NewMonsters3 = monsters.filter((monster) => {
    return titles.some(
      () =>
        monster["MHW" as keyof Monster] === 2 ||
        monster["MHWI" as keyof Monster] === 2 ||
        monster["MHR" as keyof Monster] === 2 ||
        monster["MHRS" as keyof Monster] === 2 ||
        monster["MHX" as keyof Monster] === 2 ||
        monster["MHXX" as keyof Monster] === 2 ||
        monster["MH4" as keyof Monster] === 2 ||
        monster["MH4G" as keyof Monster] === 2 ||
        monster["MH3G" as keyof Monster] === 2 ||
        monster["MH3" as keyof Monster] === 2 ||
        monster["P3rd" as keyof Monster] === 2
    );
  });

  // 忘れ去られた組
  const target2 = monsters.filter((monster) => {
    const zeroValueKeyCount = titles.reduce((count, title) => {
      return monster[title.key as keyof Monster] === 0 ? count + 1 : count;
    }, 0);

    return zeroValueKeyCount >= 15;
  });
  const restructuries = target2.filter((item) => !NewMonsters2.includes(item));

  // さらに忘れ去られた組
  const target3 = monsters.filter((monster) => {
    const zeroValueKeyCount = titles.reduce((count, title) => {
      return monster[title.key as keyof Monster] === 0 ? count + 1 : count;
    }, 0);

    return zeroValueKeyCount >= 15;
  });
  const restructuries2 = target2.filter((item) => !NewMonsters3.includes(item));

  // 大体いる
  const almostTitles = target1.filter((monster) => {
    const NotzeroValueKeyCount = titles.reduce((count, title) => {
      return monster[title.key as keyof Monster] !== 0 ? count + 1 : count;
    }, 0);

    return NotzeroValueKeyCount >= 12;
  });

  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleModalButton = () => {
    onOpen();
  };
  return (
    <Box bg={"gray.200"}>
      <SearchModal isOpen={isOpen} onClose={onClose} />
      <Header />

      <Box display="flex" justifyContent="center">
        <SearchButton onClick={handleModalButton} />
      </Box>

      {/* コンテンツ */}
      <Box color={"black"} textAlign={"center"} w={"100%"} minH={"80vh"}>
        {/* 忘れ去られた組 */}
        <Heading as={"h2"} marginY={16}>
          😭 忘れ去られた組
        </Heading>
        <Text marginY={4}>残念。。。😭😭😭</Text>
        <Text marginY={4}>最終登場作品は、 MHP2ndG 以前です。</Text>
        <Box w={"80%"} minH={"30vh"} m={"auto"} alignItems={"center"}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={1}
          >
            <>
              {restructuries2.map((item) => (
                <GridItem
                  color={"white"}
                  w={"100%"}
                  key={item.index}
                  h={"200px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"blue.700"}
                  borderRadius={"8px"}
                  padding={4}
                  border={"1px"}
                  cursor={"pointer"}
                >
                  <Text textAlign={"center"} fontWeight={"bold"}>
                    {item.name.ja}
                  </Text>
                  <Image
                    src={`/${item.index}.png`}
                    alt={`モンスター画像_${item.index}`}
                    width={100}
                    height={100}
                  />
                </GridItem>
              ))}
            </>
          </Grid>
        </Box>

        <Box
          w={"80%"}
          border={"1px solid gray"}
          m={"auto"}
          marginY={"5rem"}
        ></Box>

        {/* 皆勤賞組 */}
        <Heading as={"h2"} marginY={16}>
          ⭐️ 皆勤賞組
        </Heading>
        <Text marginY={16}>さすがのリオ夫婦❗️</Text>
        <Box w={"80%"} minH={"30vh"} m={"auto"} alignItems={"center"}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={1}
          >
            <>
              {isKaikins.map((item) => (
                <GridItem
                  color={"white"}
                  w={"100%"}
                  key={item.index}
                  h={"200px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"orange.700"} // 木箱の色に合わせて変更
                  borderRadius={"8px"} // 木箱の角を丸くする
                  padding={4} // 適宜調整
                  border={"1px"}
                >
                  <Text textAlign={"center"} fontWeight={"bold"}>
                    {item.name.ja}
                  </Text>
                  <Image
                    src={`/${item.index}.png`}
                    alt={`モンスター画像_${item.index}`}
                    width={100}
                    height={100}
                  />
                </GridItem>
              ))}
            </>
          </Grid>
        </Box>

        <Box
          w={"80%"}
          border={"1px solid gray"}
          m={"auto"}
          marginY={"5rem"}
        ></Box>

        {/* 準皆勤賞組 */}
        <Heading as={"h2"} marginY={4}>
          😄 だいたいの作品に登場しているイツメン
        </Heading>
        <Text marginY={16}>
          フルフルって実は、モンハンの１７作品中、１２作品に登場している古参かつよくいるモンスターなんです
        </Text>
        <Box w={"80%"} minH={"30vh"} m={"auto"} alignItems={"center"}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={1}
          >
            <>
              {almostTitles.map((item) => (
                <GridItem
                  color={"white"}
                  w={"100%"}
                  key={item.index}
                  h={"200px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"green.700"} // 木箱の色に合わせて変更
                  borderRadius={"8px"} // 木箱の角を丸くする
                  padding={4} // 適宜調整
                  border={"1px"}
                >
                  <Text textAlign={"center"} fontWeight={"bold"}>
                    {item.name.ja}
                  </Text>
                  <Image
                    src={`/${item.index}.png`}
                    alt={`モンスター画像_${item.index}`}
                    width={100}
                    height={100}
                  />
                </GridItem>
              ))}
            </>
          </Grid>
        </Box>

        <Box
          w={"80%"}
          border={"1px solid gray"}
          m={"auto"}
          marginY={"5rem"}
        ></Box>

        {/* 新参組  MHW:I以降　*/}
        <Heading as={"h2"} marginY={4}>
          ⭐️ 新参組
        </Heading>
        <Box w={"80%"} minH={"30vh"} m={"auto"} alignItems={"center"}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={1}
          >
            <>
              {NewMonsters.map((item) => (
                <GridItem
                  color={"white"}
                  w={"100%"}
                  key={item.index}
                  h={"200px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"green.700"} // 木箱の色に合わせて変更
                  borderRadius={"8px"} // 木箱の角を丸くする
                  padding={4} // 適宜調整
                  border={"1px"}
                >
                  <Text textAlign={"center"} fontWeight={"bold"}>
                    {item.name.ja}
                  </Text>
                  <Image
                    src={`/${item.index}.png`}
                    alt={`モンスター画像_${item.index}`}
                    width={100}
                    height={100}
                  ></Image>
                </GridItem>
              ))}
            </>
          </Grid>
        </Box>
      </Box>

      <Box
        w={"80%"}
        border={"1px solid gray"}
        m={"auto"}
        marginY={"5rem"}
      ></Box>

      <Footer />
    </Box>
  );
}
