import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import HomeScreen from "./app/screens/HomeScreen";
import UserScreen from "./app/screens/UserScreen";
import CartScreen from "./app/screens/CartScreen";
import { useState } from "react/cjs/react.development";
import { UserContext } from "./app/providers/UserContext";
import { CartProvider } from "./app/providers/CartContext";
import CategoriesScreen from "./app/screens/CategoriesScreen";

const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="AuthStack" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const Home = () => {
  return (
    <CartProvider>
      <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: "#434c6d" }, headerTintColor: "white", headerTitleAlign: "center" }}>
        <HomeStack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <HomeStack.Screen name="User" component={UserScreen} />
        <HomeStack.Screen name="Cart" component={CartScreen} />
        <HomeStack.Screen name="Categories" component={CategoriesScreen} />
      </HomeStack.Navigator>
    </CartProvider>
  );
};

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthStack">
          {user === null ? <Stack.Screen options={{ headerShown: false }} name="AuthStack" component={Auth} /> : <Stack.Screen options={{ headerShown: false }} name="HomeStack" component={Home} />}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
