import { Checkbox } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Text, ScrollView, Box, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormFields } from "../Components";
import Toast from "react-native-toast-message";
import { PixelRatio } from "react-native";
import useGlobalContext from "../../Context/AppContext";
const Register = ({ navigation }) => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    recoveryemail: "",
  };
  const [state, setState] = useState(initialState);
  const [isChecked, setCheked] = useState(false);
  const onSubmit = () => {
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      confirmpassword,
      recoveryemail,
    } = state;
    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      !password ||
      !confirmpassword ||
      !recoveryemail ||
      !isChecked
    ) {
      Toast.show({
        text1: "Invalid input",
        text2: "Please provide all values",
        visibilityTime: 2000,
      });
    } else {
      console.log("submit successful");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d9d9d9", padding: 7 }}>
      <Text
        color={"black"}
        bold
        fontSize={24}
        letterSpacing={1}
        marginTop={5}
        textAlign={"center"}
      >
        Register.
      </Text>
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        marginTop={3}
        scrollEventThrottle={400}
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        decelerationRate={"normal"}
      >
        <FormFields
          name="First name"
          onchange={(e) => setState({ ...state, firstname: e })}
          placeholder="enter your first name"
          value={state.firstname}
          secureTextEntry={false}
        />
        <FormFields
          name="Last name"
          onchange={(e) => setState({ ...state, lastname: e })}
          placeholder="enter your last name"
          value={state.lastname}
          secureTextEntry={false}
        />
        <FormFields
          name="Email "
          onchange={(e) => setState({ ...state, email: e })}
          placeholder="enter your email"
          value={state.email}
          secureTextEntry={false}
        />
        <FormFields
          name="Phone"
          onchange={(e) => setState({ ...state, phone: e })}
          placeholder="enter your Phone"
          value={state.phone}
          secureTextEntry={false}
        />
        <FormFields
          name="password"
          onchange={(e) => setState({ ...state, password: e })}
          placeholder="enter your name"
          value={state.password}
          secureTextEntry={true}
        />
        <FormFields
          name="confirm"
          onchange={(e) => setState({ ...state, confirmpassword: e })}
          placeholder="enter your name"
          value={state.confirmpassword}
          secureTextEntry={false}
        />
        <FormFields
          name="Recovery email"
          onchange={(e) => setState({ ...state, recoveryemail: e })}
          placeholder="enter your name"
          value={state.recoveryemail}
          secureTextEntry={false}
        />
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          marginTop={10}
          flexWrap={"wrap"}
        >
          <Checkbox.Item
            status={isChecked ? "checked" : "unchecked"}
            label="I have read and agreed to the terms and conditions
 of service"
            position="leading"
            labelVariant="labelMedium"
            color="green"
            uncheckedColor="red"
            onPress={() => setCheked(!isChecked)}
          />
        </Box>
        <Box>
          <Button
            onPressIn={onSubmit}
            style={{ backgroundColor: "#0B2447" }}
            w={"2/3"}
            alignSelf={"center"}
            borderRadius={10}
            marginTop={4}
          >
            <Text style={{ color: "#FFF", fontSize: 20, letterSpacing: 1 }}>
              Register
            </Text>
          </Button>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              marginTop: 30,
            }}
          >
            <Text
              style={{ borderBottomWidth: 1, fontSize: 17, letterSpacing: 0.3 }}
            >
              Already have an account?
            </Text>
            <Text h4 style={{ color: "#076cf8", letterSpacing: 0.5 }}>
              Login
            </Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default Register;
