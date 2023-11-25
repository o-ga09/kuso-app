import React, { useContext } from "react";
import { Button, Text } from "../common/components";
import { Monster, Tag } from "../lib/const";
import { ListContext } from "../common/provider";
import { FaSearch } from "react-icons/fa";

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
        <Text p={4}>絞り込む</Text>
        <FaSearch />
      </Button>
    </>
  );
}

type SelectsProps = {
  selected: Tag[];
};
export function DecideButton(props: SelectsProps) {
  const { handleData } = useContext(ListContext);
  const fetchData = async () => {
    const conditionList = props.selected;
    // 選択された条件を抽出する
    const selectedList = conditionList.filter(
      (item) => item.isSelected === true
    );
    // クエリパラメータの配列を作る
    const queryParams = selectedList.map((item, index) => [
      `condition_${index + 1}`,
      item.key,
    ]);
    const queryString = new URLSearchParams(queryParams).toString();

    const res = await fetch(`/api/monsters?${queryString}`);
    const data = await res.json();
    handleData(data);
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
        <Text p={4}>検索</Text>
        <FaSearch />
      </Button>
    </>
  );
}
