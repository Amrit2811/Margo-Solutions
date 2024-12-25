//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "./Screen/LoginScreen";
import SplashScreen from "./Screen/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}