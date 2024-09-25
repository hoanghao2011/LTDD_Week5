import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Screen2({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['#ADD8E6', '#FF0000', '#000000', '#0000FF']; 

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handlePressDone = () => {
    if (selectedColor) {
      navigation.navigate('Screen3', { selectedColor }); // Navigate to Screen3 and pass selected color
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/vs_blue.png')} 
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
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
          onPress={handlePressDone} // Navigate to Screen3 when 'XONG' is pressed
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
    justifyContent: 'flex-start', // Keep image and title aligned properly
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 120, // Increased height for better visibility
    resizeMode: 'contain', // Ensure image is not cut off
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1, // Ensure the title fits next to the image
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
    marginBottom: 30, // Added margin to separate from the button
  },
  colorOption: {
    width: 60,
    height: 60,
    marginVertical: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#7C4DFF', // Highlight the selected color
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 6, // Ensure button is above the bottom of the screen
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 12,
    paddingHorizontal: 80, // Increased padding for better visibility
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
