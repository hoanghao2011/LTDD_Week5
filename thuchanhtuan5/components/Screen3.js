import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Screen3({ route, navigation }) {
  const { selectedColor: initialSelectedColor } = route.params; // Get the selected color passed from Screen 2
  const [selectedColor, setSelectedColor] = useState(initialSelectedColor);

  const colors = ['#ADD8E6', '#FF0000', '#000000', '#0000FF'];
  const colorNames = {
    '#ADD8E6': 'Xanh nhạt',
    '#FF0000': 'Đỏ',
    '#000000': 'Đen',
    '#0000FF': 'Xanh dương'
  };

  const productImageURL = {
    '#ADD8E6': require('../assets/vs_blue.png'),  
    '#FF0000': require('../assets/vs_red.png'),   
    '#000000': require('../assets/vs_black.png'), 
    '#0000FF': require('../assets/vs_silver.png'),
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);  
  };

  const handlePressDone = () => {
    navigation.navigate('Screen1', { selectedColor }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={productImageURL[selectedColor]} 
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <Text style={styles.productColor}>Màu: {colorNames[selectedColor]}</Text>
          <Text style={styles.productProvider}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={styles.productPrice}>1.790.000 đ</Text>
        </View>
      </View>

      <Text style={styles.instructionText}>Chọn một màu bên dưới:</Text>

      <View style={styles.colorOptionsContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorOption,
              { backgroundColor: color },
              selectedColor === color && styles.selectedColor,
            ]}
            onPress={() => handleColorSelection(color)} 
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePressDone} 
        >
          <Text style={styles.buttonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productInfo: {
    flexShrink: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 14,
    color: '#FF0000',
  },
  productProvider: {
    fontSize: 12,
    color: '#757575',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  instructionText: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
  colorOptionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  colorOption: {
    width: 60,
    height: 60,
    marginVertical: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#3f51b5', 
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 6,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
