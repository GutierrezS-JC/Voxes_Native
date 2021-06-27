import React, { useContext } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { CartContext } from "../providers/CartContext";

function UserScreen({ route, navigation }) {
  const context = useContext(CartContext);
  const { loggedUser } = route.params;

  return (
    <>
      <View>
        <Image style={styles.banner} source={require("../assets/Profile.jpg")} />
        <View style={{ flexDirection: "row", top: -85, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "white" }}>Tu perfil, {loggedUser.username} </Text>
        </View>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <View style={{ padding: 20, backgroundColor: "#2f2f2f" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>{loggedUser.username}</Text>
          <Text style={{ color: "white", marginBottom: 10 }}>Email: {loggedUser.email}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 150,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 10,
    width: "45%",
  },
  card: {
    position: "relative",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    borderColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 20,
  },
  confirmButton: {
    width: "40%",
    padding: 10,
    backgroundColor: "#434c6d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  circles: {
    width: 100,
    height: 100,
    marginBottom: -40,
    borderRadius: 50,
    backgroundColor: "#616e91",
    justifyContent: "center",
    top: -60,
  },
  emptyCartButton: {
    width: "40%",
    padding: 10,
    backgroundColor: "#c82333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  goBuyButton: {
    width: "100%",
    padding: 10,
    backgroundColor: "#434c6d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default UserScreen;
