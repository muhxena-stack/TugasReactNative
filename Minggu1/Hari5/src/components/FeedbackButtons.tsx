import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Alert, Platform } from 'react-native';

const FeedbackButtons = () => {
  const handlePress = (buttonName: string) => Alert.alert(`${buttonName} Ditekan!`);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableBase}
        activeOpacity={0.7} 
        onPress={() => handlePress("Opacity Button")}
      >
        <Text style={styles.buttonText}>Tombol Opacity</Text>
      </TouchableOpacity>
      
      <TouchableHighlight
        style={styles.touchableBase}
        activeOpacity={0.9} 
        underlayColor="#E0E0E0" 
        onPress={() => handlePress("Highlight Button")}
      >
        <Text style={styles.highlightText}>Tombol Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

// ---

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 30, 
    backgroundColor: '#FFFFFF',
    gap: 20, 
  },

  
  touchableBase: { 
    width: '85%',
    paddingVertical: 14, 
    paddingHorizontal: 20,
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A4A4A', 

   
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15, 
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
  },


  buttonText: { 
    color: 'white', 
    fontSize: 17, 
    fontWeight: '600', 
    letterSpacing: 0.4, 
    textTransform: 'uppercase', 
  },
  

  highlightText: {
    color: 'white', 
    fontSize: 17, 
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  }
});

export default FeedbackButtons;