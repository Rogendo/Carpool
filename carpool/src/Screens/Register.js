import React, { useState } from "react";
import { Text, Button } from "@rneui/base";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import FormElement from "../Components/FormElement";
// import { CheckBox } from "@rneui/base";
import { CheckBox } from "@rneui/themed";
import useGlobalContext from "../context/appContext";

const Register = ({ navigation }) => {
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    recoveryEmail: "",
    phone: "",
    password: "",
    retypePassword: "",
    checked: false,
  };
  const [state, setState] = useState(initialState);
  const toggleCheckbox = () => {
    setState({ ...state, checked: !state.checked });
  };
  return (
    <View style={styles.container}>
      <Text h4 h4Style>
        Register
      </Text>

      <FormElement name="e-mail" placeholder="user@gmail.com" />
      <FormElement name="first name" placeholder="username" />
      <FormElement name="last name" placeholder="userlastname" />
      <FormElement name="Recovery email" placeholder="recovery@gmail.com" />
      <FormElement name="phone" placeholder="+254 *********" />
      <FormElement name="password" placeholder="****" />
      <FormElement name="Retype password" placeholder="****" />
      <CheckBox
        style={{ marginTop: 10 }}
        checked={state.checked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
        title="I have read and agreed to the terms and conditions
 of service"
        center="true"
        size={30}
      />
      <View
        style={{
          width: "70%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={styles.button}
          title="Register"
          size="sm"
          color="primary"
        ></Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            margin: 20,
            // marginBottom: 10,
          }}
        >
          <Text
            style={{ borderBottomWidth: 1, fontSize: 18, letterSpacing: 0.3 }}
          >
            Already have account?
          </Text>
          <Text h4 style={{ color: "#076cf8", letterSpacing: 0.5 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    width: "100%",
    padding: 6,
    // marginTop: 40,
    justifyContent: "space-evenly",
  },
  button: {
    width: "60%",
  },
});
export default Register;
