import { Pressable, View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function PhraseButton({ word, onPress }){
  return(
    <View style={styles.buttonOuterContainer}>    
      <Pressable 
        style={styles.buttonInnerContainer} 
        onPress={onPress} 
        android_ripple={{ color: Colors.primary600 }}>      
        <Text 
          style={styles.buttonText} 
          adjustsFontSizeToFit numberOfLines={1}
        >
          {word}
        </Text>
      </Pressable>
    </View>
  );
}

export default PhraseButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    height: 50,
    alignSelf: 'flex-start',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6,
    width: "100%",
    height: "100%",
    justifyContent: 'center'    
  },
  buttonText: {
    color: Colors.primary800,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'open-sans',
    elevation: 4    
  }
});