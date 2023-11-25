"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
} from "../common/components";
import { Tag, TitleTag } from "../lib/const";
import { DecideButton } from "./Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function SearchModal(props: Props) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const [selected, setSelected] = useState<Tag[]>(TitleTag);

  const ModifySelected = (id: number) => {
    const newTag: Tag = {
      id: id,
      key: selected[id].key,
      isSelected: !selected[id].isSelected,
    };
    setSelected(selected.map((item, index) => (index == id ? newTag : item)));
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"flex"} justifyContent={"center"}>
            検索条件
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={4}
              >
                {TitleTag.map((item, id) => (
                  <GridItem
                    key={id}
                    w={"100%"}
                    bg={selected[id].isSelected ? "yellow" : "red"}
                    borderRadius={"3xl"}
                    _hover={{ bg: "gray.500", cursor: "pointer" }}
                    textAlign={"center"}
                    onClick={() => ModifySelected(id)}
                  >
                    {item.key}
                  </GridItem>
                ))}
              </Grid>
              <Box display={"flex"} justifyContent={"center"} mt={32}>
                <DecideButton selected={selected} />
              </Box>
            </>
          </ModalBody>

          <ModalFooter>
            <Button bg="white" borderColor="black" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchModal;
