import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AntDesign } from "@expo/vector-icons";
webBrowser.maybeCompleteAuthSession();
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "@rneui/themed";

const GoogleSignIn = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: "enter your client id",
    iosClientId: "enter your ios id",
    androidClientId: "enter your android id",
  });
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
    accessToken && getUserInfo();
  }, [response, accessToken]);

  const getUserInfo = async () => {
    try {
      let res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userInfo = await res.json();
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const ShowUserInfo = () => {
    if (user) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 35, fontWeight: "600" }}>Welcome</Text>
          <Image
            source={{ uri: user.picture }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text>{user.name}</Text>
        </View>
      );
    }
  };
  if (user) {
    return <ShowUserInfo />;
  }
  return (
    <View style={styles.container}>
      <Text h4 style={styles.textStyles}></Text>
      <TouchableOpacity
        style={styles.touchableStyles}
        disabled={!request}
        onPress={() => promtAsync()}
      >
        <AntDesign name="googleplus" size={30} color="black" />
        <Text style={styles.textStyles}>continue with google</Text>
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
