"use client";
import React from "react";
import SearchModal from "./Modal";
import { Box, useDisclosure } from "../common/components";
import { SearchButton } from "./Button";

function Search() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleModalButton = () => {
    onOpen();
  };
  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} />
      <Box display="flex" justifyContent="center">
        <SearchButton onClick={handleModalButton} />
      </Box>
    </>
  );
}

export default Search;
