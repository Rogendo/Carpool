import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
const Policy = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.textStyles}>Privacy policy </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.textStyles}>Terms and conditions</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  touch: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  textStyles: {
    fontSize: 20,
  },
});

export default Policy;
