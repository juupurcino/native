import React from "react";
import { FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import data from "@/constants/dataEx.json";
import { Item } from "@/components/item"

export default function List() {
  return (
    <>
      <Text>Lista</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.back}
          data={data}
          renderItem={({ item }) => <Item nome={item.nome} idade={item.idade} data={item.data} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    paddingHorizontal: 20,
    backgroundColor: "#EBEBEBFF"
  }

})