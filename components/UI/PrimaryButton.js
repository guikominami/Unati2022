import { Pressable, View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ word, onPress, isVocabulary }){
  return(
    <View style={styles.buttonOuterContainer(isVocabulary)}>    
      <Pressable 
        style={styles.buttonInnerContainer} 
        android_ripple={{color: '#cccccc'}}        
        onPress={onPress}>
        <Text 
          style={styles.buttonText(isVocabulary)} 
          adjustsFontSizeToFit numberOfLines={1}
        >
          {word}
        </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({

  buttonOuterContainer: (isVocabulary) => {

    var size = isVocabulary ? 130 : "100%";

    return {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
      width: size,
      height: 50,
      alignSelf: 'center',
    };
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
  },

  buttonText: (isVocabulary) => {
    
    var size = isVocabulary ? 28 : 20;

    return{
      color: Colors.primary800,
      textAlign: 'center',
      fontSize: size,
      fontFamily: 'open-sans',
    }
  }
});