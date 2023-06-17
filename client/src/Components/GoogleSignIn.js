import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
const GoogleSignIn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableStyles}
        disabled={false}
        onPress={() => console.log("sign in with Google")}
      >
        <FontAwesome name="google" size={24} color="black" />
        <Text style={styles.textStyles}>continue with Google</Text>
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
export default GoogleSignIn;
