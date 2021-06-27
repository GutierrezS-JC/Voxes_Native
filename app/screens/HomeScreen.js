import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useState } from "react/cjs/react.development";
import { UserContext } from "../providers/UserContext";
import { CartContext } from "../providers/CartContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getItems, getCategories } from "../db/db";

function HomeScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const { addItem } = useContext(CartContext);
  const context = useContext(CartContext);
  const [loggedUser, setLoggedUser] = useState({});
  //const categories = ["Guitar", "Pedal", "Amp"];

  const onAdd = (item) => {
    addItem(item);
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    setLoggedUser(user);
  }, []);

  const listCategories = () => {
    let categories = [];
    getCategories().forEach((categorie) => {
      categories.push(
        <TouchableOpacity style={styles.categoriesOptions} key={categorie.id} onPress={() => navigation.navigate("Categories", { categorie })}>
          <Text style={{ color: "white" }}>{categorie.categoryName}</Text>
        </TouchableOpacity>
      );
    });
    return categories;
  };

  const listItems = () => {
    let items = [];
    getItems().forEach((item) => {
      items.push(
        <View key={`card${item.id}`} style={[styles.card, styles.shadow]}>
          <Image style={{ resizeMode: "contain", height: 200, width: "100%" }} source={item.imageUrl} />
          <View style={{ padding: 20, backgroundColor: "#2f2f2f", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginBottom: 5 }} key={item.id}>
              {item.name}
            </Text>
            <Text style={{ color: "white", marginBottom: 10 }}>{item.description}</Text>
            <Text style={{ color: "white", marginBottom: 10 }}>Category: {item.category}</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>${item.price}</Text>
            <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.85} underlayColor="white" onPress={() => onAdd(item)}>
              <View style={styles.registerButton}>
                <Text style={{ color: "white" }}>Agregar al carrito</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
    return items;
  };

  return (
    <>
      <ScrollView>
        <View>
          <Image style={styles.banner} source={require("../assets/HomeBanner.jpg")} />
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/voxesLogo.png")} />
            <Text style={{ color: "white", fontSize: 25 }}> Voxes</Text>
          </View>

          <View style={{ flexWrap: "wrap", top: -105, marginLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, color: "white" }}>Bienvenid@</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginLeft: 5 }} onPress={() => navigation.navigate("User", { loggedUser })}>
                {loggedUser.username}
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonLogout} activeOpacity={0.85} underlayColor="white" onPress={() => handleLogout()}>
              <View style={styles.logoutButton}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  <MaterialCommunityIcons name="exit-run" size={24} color="white" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.circles}>
              <TouchableOpacity activeOpacity={0.85} underlayColor="white" onPress={() => navigation.navigate("Cart", { loggedUser })}>
                <Text style={{ marginLeft: 5, color: "white", textAlign: "center", fontWeight: "bold" }}>{context.itemsCart.length > 0 ? context.itemsCart.length : 0} </Text>
                <FontAwesome5 style={{ textAlign: "center" }} name="shopping-cart" size={35} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.categories}>{listCategories()}</View>
          <View style={{ flex: 1 }}>{listItems()}</View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 10,
    width: "45%",
  },
  buttonLogout: {
    width: "15%",
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
  circles: {
    width: 100,
    height: 100,
    marginBottom: -50,
    borderRadius: 50,
    backgroundColor: "#616e91",
    justifyContent: "center",
    top: -100,
  },
  categories: {
    width: "100%",
    //alignSelf: "center",
    backgroundColor: "#616e91",
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
  categoriesOptions: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    width: "33%",
    alignItems: "center",
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
  logo: {
    width: 40,
    height: 40,
  },
  logoContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 50,
    marginLeft: 10,
    alignItems: "center",
  },
  logoutButton: {
    padding: 5,
    backgroundColor: "#c82333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  registerButton: {
    width: "100%",
    padding: 10,
    backgroundColor: "#434c6d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
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

export default HomeScreen;
