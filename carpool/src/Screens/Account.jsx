import React from "react";
import { Text, Button } from "@rneui/base";
import { View, StyleSheet, SafeAreaView } from "react-native";
const Account = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <Text h4>John Doe</Text>
        <Text>peteranderson@email.com</Text>
        <Text>
          Believe me, it is negotiable! I’m all positive and flexible.
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          {/* icon */}
          <Text>0792589417</Text>
          {/* icon */}
          <Text>anderson@gmail.com</Text>
          {/* icon */}
          <Text>change password</Text>
          {/* icon */}
          <Text>logout</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e6e6e6",
  },
  container: {
    width: "80%",
    height: "67%",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 100,
    gap: 20,
    justifyContent: "space-evenly",
    backgroundColor: "#c1f5e8",
    borderRadius: 20,
  },
});
export default Account;
