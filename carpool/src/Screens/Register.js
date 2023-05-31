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
    errorMsg: "",
    error: false,
  };
  const [state, setState] = useState(initialState);

  const toggleCheckbox = () => {
    setState({ ...state, checked: !state.checked });
  };
  const onChangeEmail = (newemail) => {
    setState({ ...state, email: newemail });
  };
  const onSubmit = () => {
    const {
      firstName,
      lastName,
      password,
      phone,
      recoveryEmail,
      retypePassword,
      email,
      checked,
    } = state;
    if (
      !firstName ||
      !lastName ||
      !password ||
      !phone ||
      !recoveryEmail ||
      !retypePassword ||
      !email
    ) {
      setState({
        ...state,
        error: true,
        errorMsg: "please provide all values",
      });
      setTimeout(() => {
        setState({ ...state, error: false, errorMsg: "" });
      }, 3000);
    }
    if (!checked) {
      setState({
        ...state,
        error: true,
        errorMsg: "Accept terms and conditions",
      });
      setTimeout(() => {
        setState({ ...state, error: false, errorMsg: "" });
      }, 3000);
    }
    if (!retypePassword === password) {
      setState({
        ...state,
        error: true,
        errorMsg: "please match the passwords",
      });
      setTimeout(() => {
        setState({ ...state, error: false, errorMsg: "" });
      }, 3000);
    }
    console.log(state);
  };
  return (
    <View style={styles.container}>
      <Text h4 h4Style>
        Register
      </Text>
      {state.error && (
        <Text
          h1
          h1Style={{
            fontSize: 25,
            fontWeight: "700",
            textAlign: "center",
            color: " #ff5c33",
            textShadowColor: "",
            letterSpacing: 1,
          }}
        >
          please provide all values!
        </Text>
      )}
      <FormElement
        name="e-mail"
        placeholder="user@gmail.com"
        value={state.email}
        onchange={onChangeEmail}
      />
      <FormElement
        name="first name"
        placeholder="username"
        value={state.firstName}
        onchange={(firstName) => setState({ ...state, firstName })}
      />
      <FormElement
        name="last name"
        placeholder="userlastname"
        value={state.lastName}
        onchange={(lastName) => setState({ ...state, lastName })}
      />
      <FormElement
        name="Recovery email"
        placeholder="recovery@gmail.com"
        value={state.recoveryEmail}
        onchange={(recoveryEmail) => setState({ ...state, recoveryEmail })}
      />
      <FormElement
        name="phone"
        placeholder="+254 *********"
        value={state.phone}
        onchange={(phone) => setState({ ...state, phone })}
      />
      <FormElement
        name="password"
        placeholder="****"
        secureTextEntry={true}
        value={state.password}
        onchange={(password) => setState({ ...state, password })}
      />
      <FormElement
        name="Retype password"
        placeholder="****"
        secureTextEntry={true}
        value={state.retypePassword}
        onchange={(password) =>
          setState({ ...state, retypePassword: password })
        }
      />
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
          titleStyle={{ fontSize: 20, letterSpacing: 1 }}
          size="sm"
          color=""
          radius={8}
          onPress={onSubmit}
        ></Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
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
    backgroundColor: "#e6e6e6",
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
