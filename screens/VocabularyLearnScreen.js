import { useState } from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";

import QuizItem from "../components/App/QuizItem";
import QuizPhraseItem from "../components/App/QuizPhraseItem";

import { VOCABULARY } from "../data/data";
import { PHRASES } from "../data/data";

function VocabularyLearnScreen({ route }) {
  var initialWordId = 0;

  var data;

  //console.log(route.params.dataType);

  if(route.params.dataType === "Vocabulary"){
    data = VOCABULARY;
  }
  else{
    data = PHRASES;
  }

  if (route.params.wordId !== "") {
    initialWordId = route.params.wordId;
  } else {
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
    setCurrentWord(generateWordId());
    //passa para a próxima pergunta (SE ACHAR MELHOR IR SEQUENCIAL)
    //setCurrentWord(currentWordId + 1);
  }

  generateRandom();

  function generateRandom() {
    const rndNum = Math.floor(Math.random() * (3 - 1) + 1);

    if (rndNum === 2) {
      optionWord1 = selectedWord.option2;
      optionWord2 = selectedWord.option1;
    }
  }

  if(route.params.dataType === "Vocabulary"){
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
        />
      </View>
    );
  }
  else{
    return (
      <View style={styles.rootContainer}>
        <QuizPhraseItem
          phrase={selectedWord.phrase}
          option1={optionWord1}
          option2={optionWord2}
          optionCorrect={selectedWord.optionCorrect}
          onOptionCorrectSelected={optionSelectedHandler}
          audio={selectedWord.audio}
        />
      </View>
    );
  }
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
