import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation, route }) {
  const [medicines, setMedicines] = useState([]);
  const token = route.params.token;

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/medicines');
        setMedicines(res.data);
      } catch (err) {
        alert('Failed to load medicines');
      }
    };
    fetchMedicines();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name} - {item.price} KES</Text>
      <Text>{item.description}</Text>
      <Button
        title="Order"
        onPress={() => navigation.navigate('Order', { medicineId: item._id, token })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Medicines</Text>
      <FlatList
        data={medicines}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  item: { padding: 10, borderBottomWidth: 1, marginBottom: 10 },
});