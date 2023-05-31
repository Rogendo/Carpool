import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//  context import
import { AppProvider } from "./src/context/appContext";
// Screens import
import { Register, Login } from "./src/Screens";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register",
              headerStyle: {
                backgroundColor: "#d9d9d9",
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
