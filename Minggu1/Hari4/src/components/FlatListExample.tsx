import React, { useState, useRef } from 'react';
import { FlatList, Text, View, StyleSheet, RefreshControl, TouchableOpacity, ViewToken, ListRenderItemInfo, ActivityIndicator } from 'react-native';

// Definisikan Tipe untuk Data Item
interface ListItem {
    id: string;
    title: string;
}

// Data
const INITIAL_COUNT = 15;
const ALL_DATA: ListItem[] = Array.from({ length: 100 }, (_, i) => ({ id: (i + 1).toString(), title: `Item ${i + 1}` }));
const getInitialData = () => ALL_DATA.slice(0, INITIAL_COUNT);

const FlatListExample: React.FC = () => { 
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<ListItem[]>(getInitialData());
  const [loadingMore, setLoadingMore] = useState(false);
  const [dataIndex, setDataIndex] = useState(INITIAL_COUNT);

  // Viewability config and console log (TS-compliant)
  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].item) {
      // Logic for item visibility tracking
    }
  }).current;

  // --- Fungsi Utama ---
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
        setData(getInitialData());
        setDataIndex(INITIAL_COUNT);
        setRefreshing(false);
    }, 1500);
  };
  
  const handleLoadMore = () => {
    if (loadingMore || data.length === ALL_DATA.length) return;
    setLoadingMore(true);
    setTimeout(() => {
        const nextIndex = dataIndex + 10;
        const newItems = ALL_DATA.slice(dataIndex, nextIndex);
        setData([...data, ...newItems]);
        setDataIndex(nextIndex);
        setLoadingMore(false);
    }, 1000);
  };

  const handleDeleteItem = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };


  // 🚨 SOLUSI AKHIR UNTUK ERROR OVERLOAD: Mengganti ListItem[] dengan ArrayLike<ListItem>
  const getItemLayout = (data: ArrayLike<ListItem> | null | undefined, index: number) => ({ 
    length: 70,
    offset: 70 * index, 
    index 
  });

  // Komponen Footer
  const renderFooter = () => {
    if (data.length === ALL_DATA.length) {
        return <Text style={styles.footerText}>🎉 Semua Item Telah Dimuat</Text>;
    }
    return (
        <TouchableOpacity 
            style={styles.loadMoreButton} 
            onPress={handleLoadMore} 
            disabled={loadingMore}
            activeOpacity={0.8}
        >
            {loadingMore ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
                <Text style={styles.loadMoreButtonText}>Muat Lebih Lanjut ({ALL_DATA.length - data.length} Tersisa)</Text>
            )}
        </TouchableOpacity>
    );
  };

  // Komponen Render Item
  const renderItem = ({ item }: ListRenderItemInfo<ListItem>) => (
    <TouchableOpacity 
        style={styles.itemCard} 
        activeOpacity={0.7}
        onLongPress={() => handleDeleteItem(item.id)}
    >
        <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.id}</Text>
        </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.deleteHint}>Tahan untuk Hapus</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList<ListItem>
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      
      contentContainerStyle={styles.listContent}
      style={styles.listContainer} 

      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          tintColor="#007AFF"
        />
      }
      
      getItemLayout={getItemLayout}
      initialNumToRender={INITIAL_COUNT}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      
      ListHeaderComponent={<Text style={styles.headerTitle}>Konten Premium</Text>}
      ListFooterComponent={renderFooter()}
    />
  );
};

// Styles
const styles = StyleSheet.create({
  listContainer: { flex: 1, backgroundColor: '#F5F5F5' },
  listContent: { paddingHorizontal: 15, paddingTop: 10, paddingBottom: 20, },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#333', marginBottom: 20, borderBottomWidth: 2, borderBottomColor: '#007AFF', paddingBottom: 8, textAlign: 'center', },
  
  itemCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 15, marginBottom: 10, borderRadius: 10, height: 70, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, },
  badge: { backgroundColor: '#007AFF', width: 40, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 15, },
  badgeText: { color: 'white', fontWeight: '800', fontSize: 16, },
  itemTitle: { fontSize: 16, fontWeight: '600', color: '#333', flex: 1, },
  deleteHint: { fontSize: 10, color: '#FF3B30', marginLeft: 10, },
  
  loadMoreButton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 20, marginBottom: 10, },
  loadMoreButtonText: { color: 'white', fontWeight: '600', fontSize: 16, },
  footerText: { paddingVertical: 20, textAlign: 'center', color: '#A0A0A0', fontSize: 14, fontWeight: '500', },
});

export default FlatListExample;