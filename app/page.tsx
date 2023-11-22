import { Box, Heading, Text } from "./common/components";

export default function Home() {
  return (
    <main>
      {/* ヘッダー */}
      <Box>
        <Heading
          as={"h1"}
          bgColor={"gray.500"}
          color={"white"}
          textAlign={"center"}
          w={"100%"}
          h={"10vh"}
        >
          Hello クソアプリ
        </Heading>
      </Box>

      {/* コンテンツ */}
      <Box
        bgColor={"green.500"}
        color={"white"}
        textAlign={"center"}
        w={"100%"}
        minH={"80vh"}
      >
        <Box
          w={"50%"}
          minH={"30vh"}
          position={"absolute"}
          m={"auto"}
          alignItems={"center"}
          bgColor={"white"}
          top={"25%"}
          left={"25%"}
        >
          コンテンツ
        </Box>
      </Box>

      {/* フッター */}
      <Box>
        <Text
          bgColor={"yellow.500"}
          color={"white"}
          textAlign={"center"}
          w={"100%"}
          h={"10vh"}
        >
          フッター
        </Text>
      </Box>
    </main>
  );
}
