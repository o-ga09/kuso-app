import React from "react";
import { Button } from "../common/components";
import { Tag } from "../lib/const";

type Props = {
  onClick: () => void;
};

export function SearchButton(props: Props) {
  const onClick = props.onClick;
  return (
    <>
      <Button
        w="200px"
        bg="green.300"
        onClick={onClick}
        borderRadius="3xl"
        _hover={{ bg: "green.500", cursor: "pointer" }}
        boxShadow="0px 5px 15px 0px rgba(98, 75, 64, 1)"
      >
        絞り込む
      </Button>
    </>
  );
}

type SelectsProps = {
  selected: Tag[];
};
export function DecideButton(props: SelectsProps) {
  const fetchData = async () => {
    const res = await fetch("/api/monsters");

    console.log(res.json());
  };
  return (
    <>
      <Button
        w="200px"
        bg="green.300"
        onClick={() => fetchData()}
        borderRadius="3xl"
        _hover={{ bg: "green.500", cursor: "pointer" }}
      >
        検索
      </Button>
    </>
  );
}
