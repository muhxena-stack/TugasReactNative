import React, { useState } from 'react';
import { View, Text, ImageBackground, Switch, StatusBar, StyleSheet } from 'react-native';

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent={true} /> 
      <ImageBackground
        source={{ uri: 'https://www.shutterstock.com/shutterstock/videos/3444528849/thumb/1.jpg?ip=x480' }}
        style={styles.background}
        imageStyle={{ opacity: 0.5 }} 
      >
        <View style={styles.overlay}>
          {/* Main Title */}
          <Text style={styles.title}>Selamat Datang!</Text>
          
          {/* Subtitle / Catchphrase */}
          <Text style={styles.subtitle}>Jelajahi keajaiban teknologi.</Text>

          {/* Switch Dark Mode */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Mode Gelap</Text>
            <Switch 
              value={darkMode} 
              onValueChange={setDarkMode}
              trackColor={{ false: "#767577", true: "#007AFF" }} 
              thumbColor={darkMode ? "#fff" : "#f4f3f4"}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  // --- Background dan Overlay ---
  background: { 
    flex: 1, // Solusi: Mengambil seluruh ruang yang tersedia di Parent View/Screen
    resizeMode: 'cover',
    // Properti height: 350 dihapus!
    overflow: 'hidden',
  },
  overlay: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingTop: 60, 
    paddingHorizontal: 20,
  },

  // --- Tipografi ---
  title: { 
    fontSize: 48, 
    fontWeight: '800', 
    color: 'white', 
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc', 
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: '300', 
  },
  
  // --- Switch ---
  switchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25, 
    marginTop: 20,
  },
  switchText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
});

export default HeroSection;