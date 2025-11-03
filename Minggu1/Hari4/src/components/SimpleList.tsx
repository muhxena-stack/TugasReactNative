import React, { useState } from 'react';
import { ScrollView, RefreshControl, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// 1. Tentukan data awal yang spesifik (Item 1 sampai Item 5)
const initialData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const SimpleList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(initialData); // Menggunakan data awal

  const onRefresh = () => {
    setRefreshing(true);
    // Simulasikan fetching data dan penambahan item baru ke bawah
    setTimeout(() => {
      setData([...data, `New Item ${data.length + 1}`]); 
      setRefreshing(false);
    }, 1500);
  };
  
  // 2. Fungsi untuk mengulang/reset data
  const onReset = () => {
    setData(initialData);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          tintColor="#007AFF" 
        />
      }
      contentContainerStyle={styles.content}
    >
      {/* Container untuk Judul dan Tombol Reset */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Daftar Item Keren</Text>
        
        {/* Tombol Ulangi/Reset */}
        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={onReset}
          activeOpacity={0.8}
        >
          <Text style={styles.resetButtonText}>⟲ Ulangi</Text>
        </TouchableOpacity>
      </View>

      {/* Item List */}
      {data.map((item, index) => (
        <View key={index} style={styles.itemCard}>
          <Text style={styles.itemText}>{item}</Text>
          <View style={[styles.itemBadge, { backgroundColor: index < 5 ? '#007AFF' : '#E0E0E0' }]}>
            <Text style={[styles.itemBadgeText, { color: index < 5 ? '#fff' : '#555' }]}>{index + 1}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.footerText}>Tarik ke bawah untuk memuat lebih banyak</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // --- Container Utama ---
  container: { 
    flex: 1, 
    backgroundColor: '#F7F7F7', 
  },
  content: { 
    paddingHorizontal: 15, 
    paddingVertical: 20,
  },
  
  // --- Header dan Tombol ---
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Pisahkan judul dan tombol
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
    paddingLeft: 10,
    flexShrink: 1, // Agar tidak mendominasi ruang
  },
  resetButton: {
    backgroundColor: '#FF3B30', // Warna merah yang kontras (sebagai aksi reset/bahaya)
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    // Shadow lembut
    shadowColor: "#FF3B30",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // --- Card Item ---
  itemCard: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', 
    padding: 20,
    marginBottom: 15, 
    borderRadius: 12, 
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
  itemText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  
  // --- Badge/Ikon di Samping ---
  itemBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBadgeText: {
    fontSize: 14,
    fontWeight: '700',
  },
  
  // --- Footer ---
  footerText: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
  }
});

export default SimpleList;