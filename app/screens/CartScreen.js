import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { CartContext } from "../providers/CartContext";

function CartScreen({ route, navigation }) {
  const context = useContext(CartContext);
  const { clear } = useContext(CartContext);
  const { loggedUser } = route.params;

  const getTotal = () => {
    let total = 0;
    context.itemsCart.map((item) => {
      total += Number(item.price);
    });
    return total;
  };

  const confirmBuy = () => {
    Alert.alert("Compra realizada!", "Su compra ha sido procesada con exito, en breve se le enviara un mail con los detalles de la compra.", [{ text: "Ok" }]);
    clear();
  };

  const getCantItems = () => {
    return context.itemsCart.length;
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <View key={`card${item.id}`} style={(styles.shadow, { flexDirection: "row", padding: 10, height: 100 })}>
          <Image style={{ resizeMode: "contain", height: "100%", width: 150, borderRadius: 20 }} source={item.imageUrl} />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "#434c6d" }}>Id: </Text>
              <Text style={{ color: "#434c6d" }}>{item.id}</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold", color: "#434c6d" }}>Item: </Text>
              <Text style={{ color: "#434c6d" }} key={item.id}>
                {item.name}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "#434c6d" }}>Precio </Text>
              <Text style={{ color: "#434c6d" }}>${item.price}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 0.2,
            width: "90%",
            marginTop: 10,
            alignSelf: "center",
          }}
        />
      </>
    );
  };
  const listItems = () => {
    return <FlatList data={context.itemsCart} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />;
  };

  return (
    <>
      <View>
        <Image style={styles.banner} source={require("../assets/Cart.jpg")} />
        <View style={{ flexDirection: "row", top: -85, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "white" }}>Tu carrito </Text>
        </View>
      </View>
      {context.itemsCart.length > 0 ? (
        <>
          <View style={{ padding: 10, marginLeft: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Total: ${getTotal()}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Cantidad de items: {getCantItems()}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>Envio Gratis!</Text>
            <TouchableOpacity activeOpacity={0.85} underlayColor="white" onPress={() => confirmBuy()}>
              <View style={styles.confirmButton}>
                <Text style={{ color: "white" }}>Comprar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.85} underlayColor="white" onPress={() => clear()}>
              <View style={styles.emptyCartButton}>
                <Text style={{ color: "white" }}>Vaciar carrito</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1.5,
              width: "90%",
              marginTop: 10,
              alignSelf: "center",
            }}
          />
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>{listItems()}</View>
          </View>
        </>
      ) : (
        <>
          <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10, marginLeft: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Carrito... vacio </Text>
            <Text style={{ fontSize: 15 }}>Tan vacio que puedo escuchar mis pensamientos</Text>
            <TouchableOpacity activeOpacity={0.85} underlayColor="white" onPress={() => navigation.navigate("Home")}>
              <View style={styles.goBuyButton}>
                <Text style={{ color: "white" }}>Seguir comprando</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
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

export default CartScreen;
