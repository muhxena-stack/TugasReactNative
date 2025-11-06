import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const FlexboxPlayground = () => {
  // ✅ State dengan tipe literal biar gak error
  const [flexDirection, setFlexDirection] = useState<'row' | 'column' | 'row-reverse'>('row');
  const [justifyContent, setJustifyContent] = useState<
    'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  >('flex-start');
  const [alignItems, setAlignItems] = useState<
    'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  >('flex-start');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎨 Flexbox Playground</Text>

      {/* Container utama */}
      <View
        style={[
          styles.boxContainer,
          {
            flexDirection,
            justifyContent,
            alignItems,
          },
        ]}
      >
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
      </View>

      {/* Tombol pengaturan */}
      <View style={styles.controls}>
        <Text style={styles.sectionTitle}>Flex Direction</Text>
        <View style={styles.row}>
          <Button label="Row" onPress={() => setFlexDirection('row')} />
          <Button label="Column" onPress={() => setFlexDirection('column')} />
          <Button label="Row Reverse" onPress={() => setFlexDirection('row-reverse')} />
        </View>

        <Text style={styles.sectionTitle}>Justify Content</Text>
        <View style={styles.row}>
          <Button label="Start" onPress={() => setJustifyContent('flex-start')} />
          <Button label="Center" onPress={() => setJustifyContent('center')} />
          <Button label="Between" onPress={() => setJustifyContent('space-between')} />
        </View>

        <Text style={styles.sectionTitle}>Align Items</Text>
        <View style={styles.row}>
          <Button label="Start" onPress={() => setAlignItems('flex-start')} />
          <Button label="Center" onPress={() => setAlignItems('center')} />
          <Button label="Stretch" onPress={() => setAlignItems('stretch')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

// 🔘 Komponen tombol kecil
const Button = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

// 💅 Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  boxContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginVertical: 10,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  controls: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default FlexboxPlayground;
