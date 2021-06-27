import React, { useContext } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { CartContext } from "../providers/CartContext";
import { getItems } from "../db/db";

function CategoriesScreen({ route, navigation }) {
  const { categorie } = route.params;
  const { addItem } = useContext(CartContext);

  const onAdd = (item) => {
    addItem(item);
  };

  const listItems = () => {
    let items = [];
    getItems()
      .filter((item) => item.category === categorie.categoryName)
      .forEach((item) => {
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
          <Image style={styles.banner} source={require("../assets/Categories.jpg")} />
          <View style={{ flexDirection: "row", top: -85, marginLeft: 10 }}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Categoria, {categorie.categoryName} </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>{listItems()}</View>
      </ScrollView>
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
export default CategoriesScreen;
