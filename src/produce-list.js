import React from "react";
import { FlatList, Text } from "react-native";

export const ProduceList = (props) => {
  const { produceList } = props;

  return (
    <FlatList
      data={produceList}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};
