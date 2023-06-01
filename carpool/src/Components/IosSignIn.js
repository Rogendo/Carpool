import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";

const IosSignIn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableStyles}
        disabled={false}
        onPress={() => console.log("sign in with apple")}
      >
        <FontAwesome name="apple" size={24} color="black" />
        <Text style={styles.textStyles}>continue with apple</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  textStyles: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "capitalize",
  },
  touchableStyles: {
    backgroundColor: "#FFF",
    width: "80%",
    height: 40,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1.3,
    borderRadius: 10,
  },
});
export default IosSignIn;
