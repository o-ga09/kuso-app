"use client";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./components/theme";
import { createContext, useEffect, useState } from "react";
import { Monster, monsters } from "../lib/const";

export const ListContext = createContext({
  contentData: monsters,
  handleData: (data: Monster[]) => {},
});
export default function Provider({ children }: { children: React.ReactNode }) {
  const [contentData, setContent] = useState<Monster[]>([]);
  const handleData = (data: Monster[]) => {
    setContent(data);
  };

  useEffect(() => {
    handleData(monsters);
  }, []);

  return (
    <ListContext.Provider value={{ contentData, handleData }}>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </ListContext.Provider>
  );
}
