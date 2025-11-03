import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Switch,
  Modal,
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const App = () => {
  // State untuk input, switch, dan modal
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = () => {
    if (name && email) {
      setModalVisible(true);
    } else {
      Alert.alert('Error', 'Isi semua form!');
    }
  };

  return (
    <>
      {/* StatusBar */}
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} hidden={false} translucent={false} />

      {/* ImageBackground */}
      <ImageBackground
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.background}
        imageStyle={{ opacity: 0.5 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {/* View sebagai container utama */}
          <View style={styles.card}>
            {/* Image */}
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.avatar}
              resizeMode="cover"
              blurRadius={0}
              onLoad={() => console.log('Image loaded')}
              onError={() => console.log('Image error')}
            />

            {/* Text */}
            <Text style={styles.title} numberOfLines={1} selectable={true} allowFontScaling={true}>
              Core Component Demo
            </Text>
            <Text style={styles.subtitle} adjustsFontSizeToFit={false}>
              Semua props default dicontohkan
            </Text>

            {/* TextInput */}
            <TextInput
              style={styles.input}
              placeholder="Nama"
              value={name}
              onChangeText={setName}
              keyboardType="default"
              secureTextEntry={false}
              maxLength={100}
              multiline={false}
              autoCapitalize="sentences"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              secureTextEntry={false}
              maxLength={50}
              multiline={false}
              autoCapitalize="none"
            />

            {/* Switch */}
            <View style={styles.switchContainer}>
              <Text>Subscribe Newsletter</Text>
              <Switch value={isSubscribed} onValueChange={setIsSubscribed} />
            </View>

            {/* Dark Mode Toggle */}
            <View style={styles.switchContainer}>
              <Text>Dark Mode</Text>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>

            {/* Button */}
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </ScrollView>

        {/* Modal */}
        <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text>Form Submitted!</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { width: '100%', backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 16, marginBottom: 15, textAlign: 'center' },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 15 },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '80%', backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
});

export default App;
