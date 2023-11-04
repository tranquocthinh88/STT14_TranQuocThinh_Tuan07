import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function Orders({ route }) {
  const { cart } = route.params;

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Order</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total Price: ${calculateTotalPrice()}</Text>
      <TouchableOpacity style={styles.placeOrderButton}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontFamily: 'arial',
    fontWeight: 700,
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  total: {
    fontSize: 18,
    fontFamily: 'arial',
    fontWeight: 700,
    marginTop: 10,
  },
  placeOrderButton: {
    backgroundColor: '#00BDD6',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  placeOrderText: {
    fontSize: 16,
    fontFamily: 'arial',
    fontWeight: 700,
    color: 'white',
  },
};
