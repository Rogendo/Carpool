import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "./Context/AppContext";
import { NavigationContainer } from "@react-navigation/native";
// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// screens
import { Register, Login, Activity, Rides, Profile, Map } from "./src/Screens";
const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
// icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const MainScreen = () => {
    return (
      <Tabs.Navigator
        barStyle={{
          backgroundColor: "#ffe6e6",
          height: 64,
        }}
      >
        <Tabs.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="binoculars" size={20} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="Rides"
          component={Rides}
          options={{
            tabBarIcon: () => (
              <Ionicons name="car-sport" size={20} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="Maps"
          component={Map}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="google-maps"
                size={20}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          options={{
            tabBarAccessibilityLabel: "Profile",
            tabBarIcon: () => (
              <Ionicons name="ios-person-outline" size={20} color="black" />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tabs.Navigator>
    );
  };
  return (
    <AppProvider>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
              <Stack.Group>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Register"
                  component={Register}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={Login}
                />
              </Stack.Group>
              <Stack.Screen
                options={{ headerShown: false }}
                name="MainScreen"
                component={MainScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </AppProvider>
  );
}
