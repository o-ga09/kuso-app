import React from "react";
import { Box, Heading } from "../common/components";
import Image from "next/image";

function Header() {
  return (
    <>
      {/* ヘッダー */}
      <Box display={"flex"} flexDirection={"row"} p={4}>
        <Image
          src={"/logo-mh20th.png"}
          alt="ロゴ画像"
          height={96}
          width={100}
        />
        <Heading
          as={"h1"}
          textAlign={"center"}
          w={"100%"}
          h={"10vh"}
          fontSize={{ base: "20px", md: "30px" }}
          justifyContent={"center"}
        >
          モンハン登場回数ランキング
        </Heading>
      </Box>
    </>
  );
}

export default Header;
