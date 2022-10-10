import { Pressable, View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function PrimaryButton({ word, onPress }){
  return(
    <View style={styles.buttonOuterContainer}>    
      <Pressable 
        style={styles.buttonInnerContainer} 
        onPress={onPress} 
        android_ripple={{ color: Colors.primary600 }}>      
        <Text style={styles.buttonText}>{word}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6
  },
  buttonText: {
    color: Colors.primary800,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'open-sans',
  }
});