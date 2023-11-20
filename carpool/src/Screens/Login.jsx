import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "@rneui/themed";
import FormElement from "../Components/FormElement";
import { FontAwesome } from "@expo/vector-icons";
import GoogleSignIn from "../Components/GoogleSignIn";
import IosSignIn from "../Components/IosSignIn";
import { useNavigation } from "@react-navigation/native";
import Policy from "../Components/Policy";
import useGlobalContext from "../context/appContext";
//   name,
// placeholder,
// onchange,
// value,
// secureTextEntry,
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useGlobalContext();
  const onSubmit = () => {};
  const navigateToDashBoard = () => {
    navigation.navigate("User");
  };
  if (isLoggedIn) {
    navigateToDashBoard();
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Text h3>Login</Text>
        <FormElement
          name="email"
          onchange={(newemail) => setEmail(newemail)}
          value={email}
          secureTextEntry={false}
          placeholder="enter email"
        />
        <FormElement
          name="password"
          onchange={(newpassword) => setEmail(newpassword)}
          value={password}
          secureTextEntry={true}
          placeholder="enter password"
        />
        <Button
          style={styles.button}
          title="Login"
          titleStyle={{ fontSize: 20, letterSpacing: 1 }}
          size="md"
          buttonStyle={{
            width: "60%",
            marginTop: 50,
            display: "flex",
            justifyContent: "space-evenly",
            alignSelf: "center",
          }}
          color=""
          radius={8}
          onPress={() => console.log("log in")}
          iconPosition="right"
          icon={<FontAwesome name="send" size={24} color="white" />}
        ></Button>
      </View>
      <View style={styles.signInSocials}>
        <GoogleSignIn />
        <IosSignIn />
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            margin: 20,
          }}
        >
          <Text
            style={{ borderBottomWidth: 1, fontSize: 18, letterSpacing: 0.3 }}
          >
            Dont have an account?
          </Text>
          <Text h4 style={{ color: "#076cf8", letterSpacing: 0.5 }}>
            Register
          </Text>
        </TouchableOpacity>
        <Policy />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    height: "100%",
    width: "100%",
    padding: 8,
    justifyContent: "space-evenly",
  },
  signInSocials: { flex: 1, gap: 5, marginTop: 5 },
});

export default Login;
