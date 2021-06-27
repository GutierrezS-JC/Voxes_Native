import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { validateLogin } from "../helpers/Utils";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../providers/UserContext";

function RegisterScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const handleLogin = (authAuser) => {
    setUser(authAuser);
  };

  return (
    <KeyboardAvoidingWrapper>
      <React.Fragment>
        <Image style={styles.banner} source={require("../assets/Cat_3_Low.jpg")} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.circles}>
            <Text style={styles.textInCircle}>Login</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.inputView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="user" size={24} color="#616e91" style={{ marginRight: 10 }} />
              <TextInput style={styles.inputText} textContentType="username" placeholder="Usuario" placeholderTextColor="#6c757dba" onChangeText={(text) => setUsername(text)} />
            </View>
          </View>
          <View style={styles.inputView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="key" size={24} color="#616e91" style={{ marginRight: 5 }} />
              <TextInput
                style={styles.inputText}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Contraseña"
                placeholderTextColor="#6c757dba"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.85} underlayColor="white" onPress={() => setErrors(validateLogin(username, password, handleLogin))}>
            <View style={styles.registerButton}>
              <Text style={{ color: "white" }}>Iniciar Sesion</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>¿Todavia no tenes una cuenta?</Text>
            <Text style={{ marginLeft: 3, color: "#616e91", textDecorationLine: "underline" }} onPress={() => navigation.navigate("Register")}>
              Registrate
            </Text>
          </View>
        </View>
        {errors.length > 0 ? (
          errors.map((error, i) => (
            <View style={styles.errorStyles} key={`Lista${i}`}>
              <View style={{ flexDirection: "row", width: "80%" }}>
                <Text>{"\u2022"}</Text>
                <Text style={styles.errorText} key={i}>
                  {error}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text> </Text>
        )}
        <View style={{ height: 40 }} />
      </React.Fragment>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    width: "100%",
  },
  buttonContainer: {
    width: "80%",
  },
  circles: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#616e91",
    justifyContent: "center",
    top: -50,
  },
  errorStyles: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    backgroundColor: "#f8d7da",
    borderColor: "#f5c2c7",
  },
  errorText: {
    paddingLeft: 5,
    color: "#842029",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#e6e6e6",
    borderRadius: 25,
    height: 45,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    width: "80%",
    color: "#616e91",
  },
  textInCircle: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#616e91",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
});
export default RegisterScreen;
