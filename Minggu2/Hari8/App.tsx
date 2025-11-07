// src/App.tsx - Kode Final & Responsif

import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  FlatList, 
  View, 
  Button,
  useWindowDimensions, // Dapatkan dimensi real-time
} from 'react-native';

import { getResponsiveCardWidth } from './src/utils/responsive'; 
import ProductItem from './src/components/ProductItem';
import AddProductModal from './src/components/AddProductModal';
import ProductDetailModal from './src/components/ProductDetailModal';
import { initialProducts } from './src/data/initialProducts'; 
import { Product } from './src/types/types'; 

const App: React.FC = () => {
  const { width } = useWindowDimensions(); 

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 

  const handleAddProduct = (newProduct: Product) => {
    setProducts(prevProducts => [newProduct, ...prevProducts]); 
  };

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  // Logika Responsif
  const cardWidth = getResponsiveCardWidth(width);
  const numColumns = cardWidth === '100%' ? 1 : (cardWidth === '48%' ? 2 : 3);


  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductItem 
        product={item} 
        onPress={handleViewDetail} 
        itemWidth={cardWidth} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>🛒 Mini E-Commerce (NextLevel)</Text>

      <View style={styles.buttonWrapper}>
        <Button 
          title={`➕ Tambah Produk (Saat ini ${numColumns} Kolom)`} 
          onPress={() => setIsAddModalVisible(true)} 
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={styles.list}
        numColumns={numColumns} 
        // FIX: Tambahkan key untuk memaksa render ulang FlatList saat kolom berubah
        key={numColumns.toString()} 
      />

      <AddProductModal
        visible={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)} 
        onSubmit={handleAddProduct} 
      />

      <ProductDetailModal
        product={selectedProduct} 
        visible={!!selectedProduct} 
        onClose={handleCloseDetail}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', 
  },
  header: {
    fontSize: 22, 
    fontWeight: '700', 
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 1.5,
    elevation: 3, 
    color: '#333',
  },
  list: {
    flexGrow: 1,
    padding: 5, 
    // Flexbox lanjutan: mengatur jarak antar item di Grid
    justifyContent: 'space-between', 
  },
  buttonWrapper: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default App;