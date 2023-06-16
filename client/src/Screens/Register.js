import { Checkbox } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Text, ScrollView, Box, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "../Components/FormFields";
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d9d9d9", padding: 7 }}>
      <Text color={"black"} fontSize={24} letterSpacing={1} marginTop={5}>
        Register.
      </Text>
      <ScrollView marginTop={3}>
        <FormFields
          name="First name"
          onchange={(e) => setState({ ...state, firstname: e })}
          placeholder="enter your name"
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
          placeholder="enter your name"
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
              style={{ borderBottomWidth: 1, fontSize: 18, letterSpacing: 0.3 }}
            >
              Already have an account?
            </Text>
            <Text h4 style={{ color: "#076cf8", letterSpacing: 0.5 }}>
              Login
            </Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
