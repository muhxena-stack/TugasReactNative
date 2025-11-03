import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Animated, Easing } from 'react-native';

const ProfilCard = () => {
  // 1. Inisialisasi nilai animasi (mulai dari skala 0.8)
  const scaleAnim = useRef(new Animated.Value(0.8)).current; 
  
  useEffect(() => {
    // 2. Efek animasi saat komponen dimuat
    Animated.timing(scaleAnim, {
      toValue: 1, // Skala akhir: 1 (ukuran normal)
      duration: 500, // Durasi 0.5 detik
      easing: Easing.out(Easing.quad), // Kurva easing yang halus
      useNativeDriver: true, // Untuk performa yang lebih baik
    }).start();
  }, [scaleAnim]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" /> 
      <View style={styles.outerContainer}>
        <Animated.View 
            style={[
                styles.cardContainer, 
                // Terapkan animasi scale
                { transform: [{ scale: scaleAnim }] } 
            ]}
        >
          {/* Foto Profil */}
          <Image 
            source={{ uri: 'https://img.pikbest.com/png-images/20241022/the-stealth-code-hacker-gaming-logo_10991519.png!bwr800' }} 
            style={styles.avatar} 
          />

          {/* Nama */}
          <Text style={styles.nama}>Muh Xena</Text>

          {/* Bio */}
          <View style={styles.separator} /> 
          <Text style={styles.bio} numberOfLines={2}>
            Developer React Native enthusiast.
          </Text>
          
          {/* Tambahan Info Kontak (Kesan Profesional) */}
          <Text style={styles.contactInfo}>React Native Enthusiast | Full Stack Developer</Text>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // --- Container Utama ---
  outerContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#1A1A2E', // Latar belakang Deep Navy Blue (Elegan & Dramatis)
    padding: 30 
  },
  
  // --- Kontainer Card ---
  cardContainer: { 
    width: '100%',
    maxWidth: 320, 
    backgroundColor: '#2C394B', // Latar belakang card Dark Blue/Gray
    borderRadius: 20, // Sudut lebih membulat
    padding: 35, 
    alignItems: 'center',
    
    // Shadow elegan (kontras di latar belakang gelap)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 15,
  },
  
  // --- Avatar/Foto ---
  avatar: { 
    width: 130, 
    height: 130, 
    borderRadius: 65, 
    marginBottom: 25, 
    borderWidth: 4, 
    borderColor: '#FFC72C', // Warna aksen Emas/Kuning Cerah
    // Inner Shadow untuk ilusi kedalaman
    shadowColor: "#FFC72C",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
  },
  
  // --- Nama ---
  nama: { 
    fontSize: 28, 
    fontWeight: '900', // Sangat tebal
    color: '#E0E0E0', // Teks Putih Pucat
    marginBottom: 8,
    letterSpacing: 1, 
    textShadowColor: 'rgba(255, 255, 255, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  // --- Garis Pemisah (Separator) ---
  separator: {
    height: 1, // Lebih tipis
    width: '60%', // Lebih panjang
    backgroundColor: '#4A5568', // Garis abu-abu gelap
    marginVertical: 20,
  },
  
  // --- Bio ---
  bio: { 
    fontSize: 16, 
    textAlign: 'center',
    color: '#B0B0B0', // Teks abu-abu lembut
    lineHeight: 24, 
    marginBottom: 10,
    fontWeight: '400',
  },
  
  // --- Info Kontak Tambahan ---
  contactInfo: {
      fontSize: 12,
      marginTop: 5,
      color: '#FFC72C', // Menggunakan warna aksen emas
      fontWeight: '600',
  }
});

export default ProfilCard;