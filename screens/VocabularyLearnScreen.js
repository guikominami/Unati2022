import { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { VOCABULARY } from '../data/data';

import QuizItem from '../components/QuizItem';
import Colors from '../constants/colors';
import Title from '../components/Title';

function VocabularyLearnScreen(){

  //adivinhação inicial será 1
  const initialWord = 1;

  //setar a adivinhação corrente com a adivinhação inicial
  const [currentWord, setCurrentWord] = useState(initialWord); 

  const [currentOption, setCurrentOption] = useState();

  const [optionSelected, setOptionSelected] = useState(0);

  function optionSelectedHandler(option){
    console.log(option);
  }
/*   useEffect(() => {
    if (onNextGuess > 0){
      console.log(onNextGuess);
    }
  }, [onNextGuess]);  */ 

  const selectedWord = VOCABULARY.find((word) => word.id === currentWord);

  return (
    <View style={styles.rootContainer}>
      <Title>Que palavra é essa?</Title>
      <View style={styles.imageContainer}>
        <Image 
          source={selectedWord.image}
          style={styles.image}
        />
      </View>
      <QuizItem
        wordPt={selectedWord.optionPt}
        option1={selectedWord.option1}
        option2={selectedWord.option2}
        onOption1Selected={optionSelectedHandler.bind("this", 1)}
        onOption2Selected={optionSelectedHandler.bind("this", 2)}
      />
    </View>
  );
}

export default VocabularyLearnScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 4,
    marginTop: 20
  },
  imageContainer: {
    marginTop: 10,
    marginHorizontal: 24,
    borderWidth: 4,
    borderColor: Colors.primary500
  },
  image: {
    width: '100%',
    height: 250,
  },  
});