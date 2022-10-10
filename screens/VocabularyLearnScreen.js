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
  //toda vez que se dá um set, é renderizado novamente o componente  
  const [currentWordId, setCurrentWord] = useState(initialWord); 

  const selectedWord = VOCABULARY.find((word) => word.id === currentWordId);  

  var optionWord1 = selectedWord.option1;
  var optionWord2 = selectedWord.option2;

  function optionSelectedHandler(){
    //passa para a próxima pergunta
    setCurrentWord(currentWordId + 1);
    //console.log('Correct');
  }

  generateRandom();  

  function generateRandom() {
    const rndNum = Math.floor(Math.random() * (3 - 1) + 1);
    
    if (rndNum === 2){
      optionWord1 = selectedWord.option2;
      optionWord2 = selectedWord.option1;
    }
  }  

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
        option1={optionWord1}
        option2={optionWord2}
        optionCorrect={selectedWord.optionCorrect}
        onOptionCorrectSelected={optionSelectedHandler}
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