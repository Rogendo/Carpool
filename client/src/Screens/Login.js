import { View } from "react-native";
import { Text, Button, Box, Container } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { FormFields, GoogleSignIn, IosSignIn, Policy } from "../Components";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Toast from "react-native-toast-message";
import { customFetch } from "../../axios/customFetch";
import useGlobalContext from "../../Context/AppContext";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const onsubmit = () => {
    if (!email || !password) {
      Toast.show({
        text1: "Invalid input",
        text2: "please provide all values",
      });
    } else {
      // send request to server
      // handle possible errors such as wrong password
    }
  };
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#d9d9d9",
        padding: 4,
      }}
    >
      <Text
        color={"black"}
        bold
        fontSize={24}
        letterSpacing={1}
        marginTop={5}
        textAlign={"center"}
      >
        Login
      </Text>
      <Box flex={1}>
        <View style={{ padding: 10 }}>
          <FormFields
            name="email"
            onchange={(e) => setEmail(e)}
            placeholder="enter your email"
            value={email}
            secureTextEntry={false}
          />
          <FormFields
            name="password"
            onchange={(e) => setPassword(e)}
            placeholder="enter your name"
            value={password}
            secureTextEntry={false}
          />
          <Button
            // onPressIn={onsubmit}
            onPress={() => navigation.navigate("MainScreen")}
            style={{ backgroundColor: "#0B2447" }}
            w={"2/3"}
            alignSelf={"center"}
            borderRadius={10}
            marginTop={10}
          >
            <Text style={{ color: "#FFF", fontSize: 20, letterSpacing: 1 }}>
              Login
            </Text>
          </Button>
        </View>
        <Box
          mt={8}
          h={"8%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <View
            style={{
              width: "40%",
              backgroundColor: "black",
              height: 1,
            }}
          />
          <View>
            <Text style={{ fontSize: 19 }}>Or</Text>
          </View>
          <View
            style={{
              width: "40%",
              backgroundColor: "black",
              height: 1,
            }}
          />
        </Box>
        <View
          style={{
            height: "35%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <GoogleSignIn />
          <IosSignIn />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              margin: 10,
            }}
          >
            <Text
              style={{ borderBottomWidth: 1, fontSize: 16, letterSpacing: 0.3 }}
            >
              Dont have an account?
            </Text>
            <Text h4 style={{ color: "#076cf8", letterSpacing: 0.5 }}>
              Register
            </Text>
          </TouchableOpacity>
          <Policy />
        </View>
      </Box>
      <Toast />
    </SafeAreaView>
  );
};

export default Login;
