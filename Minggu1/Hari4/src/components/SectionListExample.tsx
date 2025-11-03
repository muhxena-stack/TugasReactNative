import React, { useState } from 'react';
import { SectionList, RefreshControl, Text, View, StyleSheet, StatusBar } from 'react-native';

const SECTIONS = [
  { title: 'A - Favorites', data: ['Apple', 'Apricot'] },
  { title: 'B - Basic', data: ['Banana', 'Blueberry'] },
  { title: 'C - Classics', data: ['Cherry', 'Coconut'] },
];

const SectionListExample = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [sections, setSections] = useState(SECTIONS);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      // Menambahkan section baru ke bagian atas
      setSections([{ title: 'NEW', data: ['New Item', 'Added Item'] }, ...sections]);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a202c" />
      <SectionList
        style={styles.container} // Terapkan style container
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        // ItemSeparatorComponent tidak diperlukan jika item menggunakan margin/padding
        // ItemSeparatorComponent={() => <View style={styles.separator} />} 
        
        SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            tintColor="#63b3ed" // Warna spinner biru muda
            progressBackgroundColor="#1a202c"
          />
        }
        stickySectionHeadersEnabled={true}
        ListEmptyComponent={<Text style={styles.empty}>No Data Available</Text>}
      />
    </>
  );
};

const styles = StyleSheet.create({
  // --- Container Utama ---
  container: {
    flex: 1,
    backgroundColor: '#1a202c', // Dark Blue/Gray (Latar Belakang Utama)
  },

  // --- Header Section (Sticky) ---
  header: {
    backgroundColor: '#2d3748', // Warna Header Darker Gray
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4a5568',
  },
  headerText: {
    fontWeight: '800', // Sangat tebal
    fontSize: 18,
    color: '#edf2f7', // Teks sangat terang
    letterSpacing: 0.5,
  },

  // --- Item Card ---
  itemCard: {
    backgroundColor: '#2d3748', // Latar belakang item sama dengan header
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 1, // Sedikit margin untuk memisahkan dari container
    borderBottomWidth: 0.5, // Garis pemisah tipis
    borderBottomColor: '#4a5568',
    
    // Shadow lembut di bawah item card (Opsional, hapus jika terlalu berat)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#cbd5e0', // Teks abu-abu muda
    fontWeight: '500',
  },

  // --- Pemisah ---
  // SectionSeparatorComponent digunakan untuk menciptakan ruang antara section
  sectionSeparator: { 
    height: 15, 
    backgroundColor: '#1a202c', // Mengikuti warna container
  },
  
  // --- List Kosong ---
  empty: { 
    padding: 40, 
    textAlign: 'center', 
    color: '#cbd5e0', 
    fontSize: 16, 
    fontStyle: 'italic' 
  },
});

export default SectionListExample;