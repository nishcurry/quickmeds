import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function OrderScreen({ route, navigation }) {
  const { medicineId, token } = route.params;
  const [quantity, setQuantity] = useState('1');

  const handleOrder = async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/medicines/order',
        { medicineId, quantity: parseInt(quantity) },
        { headers: { 'x-auth-token': token } }
      );
      alert('Order placed successfully!');
      navigation.navigate('Home', { token });
    } catch (err) {
      alert(err.response.data.msg || 'Order failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Your Order</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Submit Order" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});