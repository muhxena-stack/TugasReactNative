import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback, Platform, StyleSheet, Alert } from 'react-native';

const AdvancedTouches = () => {
  const handlePress = (buttonName: string) => Alert.alert(`${buttonName} Ditekan!`);
  const handleLongPress = (buttonName: string) => Alert.alert(`${buttonName} Long Press!`);

  const defaultRipple = TouchableNativeFeedback.Ripple('#A8C7FA', false);
  const borderedRipple = TouchableNativeFeedback.Ripple('#A8C7FA', true);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => handlePress("Tombol Tanpa Feedback")}
        onLongPress={() => handleLongPress("Tombol Tanpa Feedback")}
        delayLongPress={800}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      >
        <View style={styles.customFeedbackButton}>
          <Text style={styles.buttonText}>Tombol Transparan</Text>
          <Text style={styles.smallText}>(Tekan lama)</Text>
        </View>
      </TouchableWithoutFeedback>
      {Platform.OS === 'android' && (
        <>
          <TouchableNativeFeedback
            background={defaultRipple}
            onPress={() => handlePress("Native Ripple Solid")}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          >
            <View style={styles.nativeButtonSolid}>
              <Text style={styles.nativeButtonText}>Ripple Solid</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            background={borderedRipple}
            onPress={() => handlePress("Native Ripple Outline")}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          >
            <View style={styles.nativeButtonOutline}>
              <Text style={styles.nativeButtonOutlineText}>Ripple Outline</Text>
            </View>
          </TouchableNativeFeedback>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 24, 
    backgroundColor: '#F5F5F5', 
    gap: 25, 
  },

  customFeedbackButton: { 
    width: '80%',
    paddingVertical: 18, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6C7A89',
    borderRadius: 12,
    
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: { 
    color: '#6C7A89', 
    fontSize: 18, 
    fontWeight: '700',
  },
  smallText: {
    color: '#8D9CA8',
    fontSize: 12,
    marginTop: 4,
  },

  nativeButtonSolid: { 
    width: '80%',
    paddingVertical: 18, 
    borderRadius: 12, 
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
    
    elevation: 6, 
  },
  nativeButtonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '700',
  },

  nativeButtonOutline: {
    width: '80%',
    paddingVertical: 18, 
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3F51B5',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    
    elevation: 3,
  },
  nativeButtonOutlineText: {
    color: '#3F51B5',
    fontSize: 18, 
    fontWeight: '700',
  },
});

export default AdvancedTouches;