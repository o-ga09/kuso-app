import { extendTheme } from "@chakra-ui/react";

const customBreakpoints = {
  sm: "25em",
  md: "40em",
  lg: "64em",
  xl: "90em",
};

const customTheme = extendTheme({
  breakpoints: customBreakpoints,
  // 他のテーマ設定が続きます...
});

export default customTheme;