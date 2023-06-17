import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
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
        <Text>Privacy policy </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text>Terms and conditions</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  touch: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
});

export default Policy;
