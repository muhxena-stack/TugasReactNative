import React from 'react';
import { View, Text, Button, Pressable, StyleSheet, Alert, Platform } from 'react-native';

const SimpleButtons = () => {
  const handlePress = (buttonName: string) => Alert.alert(`${buttonName} Ditekan!`);

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button 
          title="Tombol Standar" 
          onPress={() => handlePress("Tombol Standar")} 
          color="#1E90FF" // Biru cerah
        />
      </View>

      <Pressable
        onPress={() => handlePress("Pressable Kustom")}
        style={({ pressed }) => [
          styles.pressableBase,
          { 
            backgroundColor: pressed ? '#0056b3' : '#007AFF', // Feedback visual
            ...Platform.select({
              ios: {
                shadowOffset: pressed ? { width: 0, height: 1 } : { width: 0, height: 4 },
                shadowOpacity: pressed ? 0.6 : 0.8,
              },
              android: {
                elevation: pressed ? 2 : 5,
              },
            }),
          }
        ]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.pressableText}>Tekan Saya (Kustom)</Text>
      </Pressable>
      
      <Pressable
        onPress={() => handlePress("Tombol Outline")}
        style={({ pressed }) => [
          styles.outlineButton,
          { opacity: pressed ? 0.6 : 1 }
        ]}
      >
        <Text style={styles.outlineText}>Tombol Outline</Text>
      </Pressable>
    </View>
  );
};

// ---

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 24, 
    gap: 25,
    backgroundColor: '#F0F0F0',
  },
  
  buttonWrapper: {
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  },

  pressableBase: { 
    width: '80%',
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  pressableText: { 
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  outlineButton: {
    width: '80%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default SimpleButtons;