import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text } from "@rneui/base";
const FormElement = ({ name, placeholder }) => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>{name}</Text>
      <TextInput
        style={styles.inputStyles}
        placeholder={placeholder}
        autoCapitalize="none"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyles: {
    height: 40,
    fontSize: 18,
    color: "#262626",
    width: "68%",
    borderColor: "gray",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
  },
  viewStyles: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 25,
    marginLeft: 4,
    marginRight: 4,
    gap: 10,
  },
  textStyles: {
    margin: 5,
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: 600,
    letterSpacing: 0.5,
  },
});
export default FormElement;
