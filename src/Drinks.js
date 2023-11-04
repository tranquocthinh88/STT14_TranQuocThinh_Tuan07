import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export default function Drinks({ navigation, route }) {
  const { data } = route.params;
  const [cart, setCart] = useState([]); // Giỏ hàng

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "40%" }}>
          <AntDesign
            name="arrowleft"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 30, fontFamily: "arial", fontWeight: 700 }}>Drinks</Text>
        </View>
        <AntDesign
          name='search1'
          size={25}
          color="#1DD75B"
        />
      </View>
      <ScrollView>
        <FlatList
          key='#'
          data={data.drinks}
          renderItem={({ item }) => (
            <View>
                <TouchableOpacity onPress={() => addToCart(item)}>
                <Text style={styles.addToCart}>Add to Cart</Text>
              </TouchableOpacity>
                <View style={styles.content}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ width: "50%" }}>
                  <Image source={{ uri: item.image }} style={{ width: 70, height: 70 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
                  <Text>{item.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Image source={require("../img/tamngung.png")} style={{ width: 15, height: 15 }} />
                    <Text style={{ marginLeft: 10, color: "grey" }}>{item.price}</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", width: "25%", justifyContent: "space-between", marginRight: 20 }}>
                <TouchableOpacity>
                  <Image source={require('../img/tru.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../img/cong.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
              </View>
              
            </View>
            </View>
          )}
        />
      </ScrollView>
      <View style={{ marginBottom: 30, width: "80%", justifyContent: "center", marginTop: 30 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.push("Orders", { cart: cart });
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "arial", fontWeight: 700, color: "white" }}>GO TO CART</Text>
        </TouchableOpacity>
        <Text>Total: ${calculateTotalPrice()}</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "95%",
  },
  content: {
    marginTop: 20,
    width: 350,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  addToCart: {
    color: "#00BDD6",
  },
  btn: {
    backgroundColor: "#00BDD6",
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
};
