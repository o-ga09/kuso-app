"use client";
import React, { useContext } from "react";
import { Box, Grid, GridItem, Heading, Text } from "../common/components";
import Image from "next/image";
import { ListContext } from "../common/provider";

type Props = {
  title: string;
  comment: string;
  bgColor: string;
};

function Contents(props: Props) {
  const title = props.title;
  const comment = props.comment;
  const bgColor = props.bgColor;

  const { contentData } = useContext(ListContext);
  return (
    <Box color={"black"} textAlign={"center"} w={"100%"} minH={"80vh"}>
      <Heading as={"h2"} marginY={16}>
        {title}
      </Heading>
      <Text marginY={16}>{comment}</Text>
      <Box w={"80%"} minH={"30vh"} m={"auto"} alignItems={"center"}>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={1}
        >
          {contentData === undefined ? (
            <></>
          ) : (
            contentData.map((item) => (
              <>
                <>
                  <GridItem
                    color={"white"}
                    w={"100%"}
                    key={item.index}
                    h={"200px"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={bgColor} // 木箱の色に合わせて変更
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
                </>
              </>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Contents;
