import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      {/* フッター */}
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        h={{ base: "20vh", xl: "20vh" }}
      >
        <Flex flexDirection={"row"}></Flex>

        <Text marginLeft={"30px"}>&copy; copyright 2023 o-ga09</Text>
      </Flex>
    </>
  );
}

export default Footer;
