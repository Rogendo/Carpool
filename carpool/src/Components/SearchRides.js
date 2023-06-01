import React, { useState } from "react";
import { Text, Button, Input } from "@rneui/base";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const SearchRides = () => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <View style={styles.container}>
      {/* <Ionicons name="person" size={24} color="black" /> */}
      {/* icon goes here */}
      <Input
        placeholder="Where to?"
        value={searchTerm}
        onChangeText={(newItem) => setSearchTerm(newItem)}
        rightIcon={<AntDesign name="search1" size={24} color="#6d7c92" />}
      />
      {/* search bar */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default SearchRides;
