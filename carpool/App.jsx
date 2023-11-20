import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//  context import
import { AppProvider } from "./src/context/appContext";
// Screens import
import {
  Register,
  Login,
  MyRides,
  Maps,
  TripDetails,
  Account,
  Rides,
} from "./src/Screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const TabsNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarLabelStyle: {
          fontSize: 40,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          ),
        }}
        component={Account}
      />
      <Tab.Screen
        name="Maps"
        options={{
          tabBarLabel: "maps",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color="black"
            />
          ),
        }}
        component={Maps}
      />
      <Tab.Screen
        name="Rides"
        options={{
          tabBarIcon: () => <FontAwesome5 name="car" size={24} color="black" />,
        }}
        component={Rides}
      />
      <Tab.Screen
        name="Myrides"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="walking" size={24} color="black" />
          ),
        }}
        component={MyRides}
      />

      <Tab.Screen
        name="Tripdetails"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="binoculars" size={24} color="black" />
          ),
        }}
        component={TripDetails}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Group>
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
              options={{
                title: "Login",
                headerStyle: {
                  backgroundColor: "#d9d9d9",
                },
              }}
            />
          </Stack.Group>
          <Stack.Screen
            name="User"
            component={TabsNav}
            options={{
              headerShown: false,
            }}
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
