import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Navigator from "./routes/WelcomeStack";

const screens = {
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
};

const WelcomeStack = createStackNavigator(screens);

export default createAppContainer(WelcomeStack);
