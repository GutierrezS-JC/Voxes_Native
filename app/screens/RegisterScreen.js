import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { validateRegister } from "../helpers/Utils";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../providers/UserContext";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const handleUser = (authAuser) => {
    setUser(authAuser);
  };

  return (
    <KeyboardAvoidingWrapper>
      <React.Fragment>
        <Image style={styles.banner} source={require("../assets/Cat_3_Low.jpg")} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.circles}>
            <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>Registro</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.inputView}>
            <View style={styles.rowAndCenter}>
              <Ionicons name="mail" size={24} color="#434c6d" style={{ marginRight: 10 }} />
              <TextInput style={styles.inputText} textContentType="emailAddress" placeholder="Email" placeholderTextColor="#6c757dba" onChangeText={(text) => setEmail(text)} />
            </View>
          </View>
          <View style={styles.inputView}>
            <View style={styles.rowAndCenter}>
              <FontAwesome name="user" size={24} color="#434c6d" style={{ marginRight: 15 }} />
              <TextInput style={styles.inputText} textContentType="username" placeholder="Usuario" placeholderTextColor="#6c757dba" onChangeText={(text) => setUsername(text)} />
            </View>
          </View>
          <View style={styles.inputView}>
            <View style={styles.rowAndCenter}>
              <Entypo name="key" size={24} color="#434c6d" style={{ marginRight: 10 }} />
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
          <View style={styles.inputView}>
            <View style={styles.rowAndCenter}>
              <Entypo name="key" size={24} color="#434c6d" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.inputText}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Repita la contraseña"
                placeholderTextColor="#6c757dba"
                onChangeText={(text) => setPasswordConfirmation(text)}
                require
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.85}
            underlayColor="white"
            onPress={() => setErrors(validateRegister(password, passwordConfirmation, username, email, handleUser))}
          >
            <View style={styles.registerButton}>
              <Text style={{ color: "white" }}>Crear Cuenta</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>¿Ya tenes una cuenta?</Text>
            <Text style={{ marginLeft: 3, color: "#434c6d", textDecorationLine: "underline" }} onPress={() => navigation.navigate("Login")}>
              Inicia Sesion
            </Text>
          </View>
        </View>
        {errors.length > 0 ? (
          errors.map((error, i) => (
            <View style={styles.errorView} key={`Lista${i}`}>
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
    height: 150,
    width: "100%",
  },
  buttonContainer: {
    width: "80%",
  },
  circles: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#434c6d",
    justifyContent: "center",
    top: -50,
  },
  errorView: {
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
    color: "#434c6d",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#434c6d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default RegisterScreen;
