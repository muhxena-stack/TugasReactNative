import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Switch, Modal, Alert, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';

// --- DEFINISI TIPE UNTUK THEME (Solusi error ts(7006)) ---
interface AppTheme {
  background: string;
  text: string;
  subtitle: string;
  inputBackground: string;
  inputBorder: string;
  inputPlaceholder: string;
  cardShadow: string;
}

// Objek tema dasar
const lightTheme: AppTheme = {
  background: '#fff',
  text: '#333',
  subtitle: '#888',
  inputBackground: '#f9f9f9',
  inputBorder: '#eee',
  inputPlaceholder: '#888',
  cardShadow: '#000',
};

const darkTheme: AppTheme = {
  background: '#121212',
  text: '#f0f0f0',
  subtitle: '#b0b0b0',
  inputBackground: '#282828',
  inputBorder: '#333333',
  inputPlaceholder: '#b0b0b0',
  cardShadow: '#000',
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const currentTheme = darkMode ? darkTheme : lightTheme;

  // Memoize styles untuk performa
  const themedStyles = useMemo(() => createThemedStyles(currentTheme), [currentTheme]);

  const handleLogin = () => {
    if (email && password) {
      setModalVisible(true);
    } else {
      Alert.alert('Gagal Login', 'Mohon lengkapi Email dan Password Anda.');
    }
  };

  return (
    <View style={themedStyles.container}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor={currentTheme.background} />
      
      {/* Switch Mode (Inline) - Menggunakan style yang diperbaiki */}
      <View style={themedStyles.themeToggleContainerInline}>
        <Text style={themedStyles.switchText}>Mode Gelap</Text>
        <Switch 
          value={darkMode} 
          onValueChange={setDarkMode}
          trackColor={{ false: "#767577", true: '#007AFF' }}
          thumbColor={darkMode ? "#fff" : "#f4f3f4"}
        />
      </View>
      
      {/* Judul Halaman */}
      <Text style={themedStyles.title}>👋 Selamat Datang Kembali</Text>
      <Text style={themedStyles.subtitle}>Masuk untuk melanjutkan</Text>

      {/* Input Email */}
      <TextInput
        style={themedStyles.input}
        placeholder="Alamat Email"
        placeholderTextColor={currentTheme.inputPlaceholder}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Input Password */}
      <TextInput
        style={themedStyles.input}
        placeholder="Password"
        placeholderTextColor={currentTheme.inputPlaceholder}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        maxLength={20}
      />

      {/* Remember Me & Tombol Lupa Password */}
      <View style={themedStyles.switchContainer}>
        <View style={themedStyles.rememberMeGroup}>
          <Switch 
            value={isRemember} 
            onValueChange={setIsRemember} 
            trackColor={{ false: "#767577", true: '#007AFF' }}
            thumbColor={isRemember ? "#fff" : "#f4f3f4"}
          />
          <Text style={themedStyles.rememberMeText}>Ingat Saya</Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Informasi', 'Fitur Lupa Password belum diimplementasikan.')}>
          <Text style={themedStyles.forgotPasswordText}>Lupa Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Login */}
      <TouchableOpacity 
        style={themedStyles.loginButton} 
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={themedStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Modal Sukses Login */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.modalContent}>
            <Text style={themedStyles.modalText}>🎉 Login Berhasil!</Text>
            <TouchableOpacity 
                style={themedStyles.modalCloseButton} 
                onPress={() => setModalVisible(false)}
                activeOpacity={0.8}
            >
                <Text style={themedStyles.modalCloseButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Fungsi untuk membuat stylesheet dinamis (Anotasi tipe AppTheme di sini)
const createThemedStyles = (theme: AppTheme) => StyleSheet.create({
  // --- Container Utama ---
  container: { 
    flex: 1, 
    paddingHorizontal: 30,
    justifyContent: 'center', 
    backgroundColor: theme.background, 
    // Tambahkan padding top untuk mengakomodasi switch saat menggunakan top/absolute
    paddingTop: 80, 
  },
  
  // --- Theme Toggle (Inline - Solusi Layout) ---
  themeToggleContainerInline: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // Menggunakan position absolute agar switch selalu di pojok kanan atas
    position: 'absolute', 
    top: 50, 
    right: 30,
    zIndex: 10,
  },
  switchText: {
    color: theme.text,
    marginRight: 8,
    fontSize: 14,
  },
  
  // --- Judul dan Subtitle ---
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.text, 
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: theme.subtitle, 
    marginBottom: 40, 
  },
  
  // --- Input Field ---
  input: { 
    borderWidth: 1, 
    borderColor: theme.inputBorder, 
    backgroundColor: theme.inputBackground, 
    padding: 15, 
    marginBottom: 15, 
    borderRadius: 10, 
    fontSize: 16,
    color: theme.text, 
    shadowColor: theme.cardShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: theme === darkTheme ? 0.3 : 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  
  // --- Switch Container ---
  switchContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 30, 
  },
  rememberMeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    fontSize: 14,
    color: theme.subtitle,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007AFF', 
    fontWeight: '600',
  },
  
  // --- Tombol Login ---
  loginButton: {
    backgroundColor: '#007AFF', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  
  // --- Modal Style ---
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContent: { 
    backgroundColor: theme.background, 
    padding: 30, 
    borderRadius: 15, 
    width: '85%',
    alignItems: 'center',
    shadowColor: theme.cardShadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: '#4CAF50', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default LoginForm;