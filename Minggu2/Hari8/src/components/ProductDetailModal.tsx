// src/components/ProductDetailModal.tsx - Tombol Tutup Pindah ke Bawah (Posisi Tetap)

import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Button, 
  Dimensions,
  TouchableOpacity // Menggunakan TouchableOpacity untuk tombol yang lebih stylish
} from 'react-native';
import { Product } from '../types/types';

// Mendapatkan tinggi layar untuk responsivitas modal
const { height } = Dimensions.get('window');

interface ProductDetailModalProps {
  product: Product | null;
  visible: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, visible, onClose }) => {
  if (!product) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
          {/* ⬅️ SCROLLVIEW HANYA BERISI KONTEN YANG PERLU DI SCROLL */}
          <ScrollView contentContainerStyle={styles.scrollContent}>
            
            <Image 
              source={{ uri: product.urlGambar }} 
              style={styles.image} 
              resizeMode="contain"
            />
            
            <Text style={styles.name}>{product.nama}</Text>
            <Text style={styles.price}>
              Rp {product.harga.toLocaleString('id-ID')}
            </Text>
            
            <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
            <Text style={styles.descriptionText}>{product.deskripsi}</Text>
            
          </ScrollView>
          
          {/* ⬅️ TOMBOL TUTUP DIPINDAHKAN KE LUAR SCROLLVIEW (POSISI TETAP) */}
          <View style={styles.fixedFooter}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Tutup Detail</Text>
              </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 16, 
    width: '90%', 
    maxHeight: height * 0.85, // Menggunakan dimensi layar untuk maxHeight
    elevation: 10,
    overflow: 'hidden', // Penting agar konten tidak keluar
    paddingBottom: 0, // Hapus padding bawah default
  },
  scrollContent: {
    padding: 25, 
    alignItems: 'flex-start', 
    // Tambahkan padding bawah di sini, yang akan diimbangi oleh fixedFooter
    paddingBottom: 80, 
  },
  image: {
    width: '100%',
    height: 250, 
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 28, 
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 22,
    color: '#FF4500',
    fontWeight: '800',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 8,
    color: '#555',
  },
  descriptionText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'justify',
    lineHeight: 24, 
  },
  
  // ⬅️ STYLE BARU UNTUK FOOTER TETAP
  fixedFooter: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      // Tambahkan padding bawah agar aman dari gesture area
      paddingBottom: 15, 
  },
  closeButton: {
      backgroundColor: '#1E90FF',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
  },
  closeButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  }
});

export default ProductDetailModal;