import React from "react";
import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenStack from "./WelcomeStack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const NavigationStacks = createAppContainer({
  Login: {
    screen,
  },
});

function WelcomeNavigation() {
  const WelcomeStack = createStackNavigator();
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen component={LoginScreen} />
      <WelcomeStack.Screen component={RegisterScreen} />
    </WelcomeStack.Navigator>
  );
}

export default WelcomeNavigation;
