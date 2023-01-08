import { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import QuizItem from "../components/App/QuizItem";

import { VOCABULARY } from "../data/data";
import { PHRASES } from "../data/data";

const VocabularyLearnScreen = ({ route }) => {
  var initialWordId = 1;

  var data;
  var type;

  if(route.params.dataType === "Vocabulary"){
    data = VOCABULARY;
    type = "Vocabulary";
  }
  else{
    data = PHRASES;
    type = "Phrase";
  }  

  //console.log(route.params.dataType);

  if (route.params.wordId !== "") {
    initialWordId = route.params.wordId;
  } else if (type === "Vocabulary") {
    initialWordId = generateWordId();
  }

  function generateWordId() {
    //sorteia a próxima pergunta entre os dados
    const rndWordId = Math.floor(Math.random() * (data.length - 1) + 1);
    //console.log(rndWordId);
    return rndWordId;
  }  

  //setar a adivinhação corrente com a adivinhação inicial
  //toda vez que se dá um set, é renderizado novamente o componente
  const [currentWordId, setCurrentWord] = useState(initialWordId);

  const selectedWord = data.find((word) => word.id === currentWordId);

  var optionWord1 = selectedWord.option1;
  var optionWord2 = selectedWord.option2;

  function optionSelectedHandler() {

    if (type === "Vocabulary"){
      //se for palavras, sortear
      setCurrentWord(generateWordId());
    }
    else{
        //Se for frase, ir sequencial
      if (currentWordId === data.length){
        setCurrentWord(1);
      }
      else{
        setCurrentWord(currentWordId + 1);        
      }
    }
  }

  generateRandom();

  function generateRandom() {
    const rndNum = Math.floor(Math.random() * (3 - 1) + 1);

    if (rndNum === 2) {
      optionWord1 = selectedWord.option2;
      optionWord2 = selectedWord.option1;
    }
  }

    return (
      <View style={styles.rootContainer}>
        <QuizItem
          wordPt={selectedWord.optionPt}
          option1={optionWord1}
          option2={optionWord2}
          optionCorrect={selectedWord.optionCorrect}
          onOptionCorrectSelected={optionSelectedHandler}
          audio={selectedWord.audio}
          image={selectedWord.image}
          type={type}
        />
      </View>
    );
}

export default VocabularyLearnScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 4,
    marginTop: deviceWidth < 380 ? 10 : 20,
  },
});