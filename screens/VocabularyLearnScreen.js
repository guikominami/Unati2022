import { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import QuizItem from "../components/App/QuizItem";

import { VOCABULARY } from "../data/data";
import { PHRASES } from "../data/data";

const VocabularyLearnScreen = ({ route }) => {
  var initialWordId = 0;

  var data;
  var type = route.params.dataType;
  var quizType = route.params.quizType;

  //Filtrar as palavras de acordo com o tipo de menu selecionado em data: MENU_VOCABULARY:
  //ID: 1 - "Desafio Imagens, Áudio e Texto",
  //ID: 2 - "Desafio Imagens e Texto",
  //ID: 3 - "Desafio Áudio e Texto",

  if (type === "Vocabulary") {
    if (quizType === 1){
      data = VOCABULARY.filter((item) => item.desafio1 == 1);
    }  
    else if (quizType === 2){
      data = VOCABULARY.filter((item) => item.desafio2 == 1);
    }
    else if (quizType === 3){
      data = VOCABULARY.filter((item) => item.desafio3 == 1);
    }    
  } else {
    if (quizType === 1){
      data = PHRASES.filter((item) => item.desafio1 == 1);
    }  
    else if (quizType === 2){
      data = PHRASES.filter((item) => item.desafio2 == 1);
    }
  }

  //PARA USAR SE FOR SORTEAR A PALAVRA
  const generateWordId = () => {
    //sorteia a próxima pergunta entre os dados
    const rndWordId = Math.floor(Math.random() * (data.length - 1) + 1);
    //console.log(rndWordId);
    return rndWordId;
  };

  //setar a adivinhação corrente com a adivinhação inicial
  //toda vez que se dá um set, é renderizado novamente o componente
  const [currentWordId, setCurrentWord] = useState(initialWordId);

  //const selectedWord = data.find((word) => word.id === currentWordId);

  const selectedWord = data[currentWordId];

  var optionWord1 = selectedWord.option1;
  var optionWord2 = selectedWord.option2;
/* 
  //ANTIGAMENTE ERA SORTEADA SE FOSSE PALAVRA
  const optionRandomSelectedHandler = () => {
    if (type === "Vocabulary") {
      //se for palavras, sortear
      setCurrentWord(generateWordId());
    } else {
      //Se for frase, ir sequencial
      if (currentWordId === data.length) {
        setCurrentWord(1);
      } else {
        setCurrentWord(currentWordId + 1);
      }
    }
  }; */

  const optionSelectedHandler = () => {
    if (currentWordId === data.length) {
      setCurrentWord(0);
    } else {
      setCurrentWord(currentWordId + 1);
    }
  };

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
        quizType={route.params.quizType}
      />
    </View>
  );
};

export default VocabularyLearnScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 4,
    marginTop: deviceWidth < 380 ? 10 : 20,
  },
});
