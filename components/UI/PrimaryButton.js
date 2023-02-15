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
          adjustsFontSizeToFit={isVocabulary} numberOfLines={2}
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

    var widthSize = isVocabulary ? 130 : "100%";
    var heightSize = isVocabulary ? 50 : 70;

    return {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
      width: widthSize,
      height: heightSize,
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
    var align = isVocabulary ? 'center' : 'left';    

    return{
      color: Colors.primary800,
      textAlign: align,
      fontSize: size,
      fontFamily: 'open-sans',
    }
  }
});