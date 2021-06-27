import React from "react";
import WelcomeScreen1 from "../assets/WelcomeScreen1.jpg";
import WelcomeScreen2 from "../assets/WelcomeScreen2.jpg";
import WelcomeScreen3 from "../assets/WelcomeScreen3.jpg";
import { ImageBackground, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from "react-native";

function WelcomeScreen({ navigation }) {
  const pathsImages = [WelcomeScreen1, WelcomeScreen2, WelcomeScreen3];

  const randomScreen = () => {
    let random = Math.floor(Math.random() * pathsImages.length);
    return pathsImages[random];
  };

  return (
    <React.Fragment>
      <StatusBar barStyle="default" />
      <ImageBackground style={styles.background} source={randomScreen()}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/voxesLogo.png")} />
          <Text style={styles.textTitle}>Voxes </Text>
          <Text style={styles.textSubTitle}>Compra lo que necesites</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.85} underlayColor="white" onPress={() => navigation.navigate("Login")}>
          <View style={styles.loginButton}>
            <Text style={{ color: "white" }}>Iniciar Sesion</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.85} underlayColor="white" onPress={() => navigation.navigate("Register")}>
          <View style={styles.registerButton}>
            <Text style={{ color: "white" }}>Crear Cuenta</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: "70%",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#616e91",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 15,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#434c6d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 50,
  },
  textTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  textSubTitle: {
    color: "white",
  },
});
export default WelcomeScreen;
