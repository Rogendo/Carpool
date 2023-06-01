import React from "react";
import { Text, Button } from "@rneui/base";
import { View, StyleSheet } from "react-native";
import SearchRides from "../Components/SearchRides";
const Rides = () => {
  return (
    <View style={styles.viewStyles}>
      <SearchRides />
      <Text style={styles.textStyles}>Available</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyles: {
    marginTop: 60,
    padding: 6,
  },
  textStyles: {
    fontSize: 20,
    padding: 4,
    marginHorizontal: 10,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#6d7c92",
  },
});
export default Rides;
