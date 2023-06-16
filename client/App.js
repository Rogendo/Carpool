import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "./Context/AppContext";
import { NavigationContainer } from "@react-navigation/native";
// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// screens
import { Register, Login, Activity, Rides, Profile } from "./src/Screens";
const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
  const MainScreen = () => {
    return (
      <Tabs.Navigator>
        <Tabs.Group>
          <Tabs.Screen name="Activity" component={Activity} />
          <Tabs.Screen name="Rides" component={Rides} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Group>
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
                <Stack.Screen name="Login" component={Login} />
              </Stack.Group>
              <Stack.Screen name="MainScreen" component={MainScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </AppProvider>
  );
}
