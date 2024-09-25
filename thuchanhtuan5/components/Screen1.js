import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Screen2'); // Navigate to Screen 2 on button press
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../assets/vs_blue.png')} 
      />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      
      <View style={styles.rating}>
        <Text>⭐️⭐️⭐️⭐️⭐️</Text>
        <Text>(828 đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.990.000 đ</Text>
      </View>
      
      <Text style={styles.note}>Ở đâu rẻ hơn hoàn tiền</Text>

      {/* Button to choose colors and navigate */}
      <TouchableOpacity style={styles.colorButton} onPress={handlePress}>
        <Text style={styles.buttonText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      <Button title="CHỌN MUA" onPress={() => alert('Item selected!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',  // Align prices horizontally
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginRight: 10,  // Space between current price and old price
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: '#757575',
  },
  note: {
    fontSize: 12,
    color: '#f44336',
    marginVertical: 4,
  },
  colorButton: {
    backgroundColor: '#1976d2', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
