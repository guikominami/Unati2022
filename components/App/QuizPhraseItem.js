import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Alert } from "react-native";

import Title from "../UI/Title";
import PhraseButton from "../../components/UI/PhraseButton";
import Colors from "../../constants/colors";
import Card from "../../components/UI/Card";
import AudioPlayerButton from "../../components/UI/AudioPlayerButton";

function QuizPhraseItem({
  phrase,
  option1,
  option2,
  optionCorrect,
  onOptionCorrectSelected,
  audio,
}) {
  const [currentOption, setCurrentOption] = useState();

   useEffect(() => {
    if (
      (currentOption === 1 && option1 === optionCorrect) ||
      (currentOption === 2 && option2 === optionCorrect)
    ) {
      onOptionCorrectSelected();
    } else if (currentOption != undefined){
      Alert.alert("Resposta errada", "Tente novamente!", [
        { text: "OK", style: "cancel" },
      ]);
    } 
    setCurrentOption();
  }, [currentOption, onOptionCorrectSelected]); 

  function nextGuessHandler(optionSelected) {
    setCurrentOption(optionSelected);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Que frase é essa?</Title>
      <Card>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{phrase}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View>
            <PhraseButton
              word={option1}
              onPress={nextGuessHandler.bind("this", 1)}
            />          
          </View>
          <View>
            <PhraseButton
              word={option2}
              onPress={nextGuessHandler.bind("this", 2)}
            />
          </View>
        </View>
        <AudioPlayerButton audio={audio} />
      </Card>
    </View>
  );
}

export default QuizPhraseItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  },
  titleContainer:{
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  buttonsContainer:{
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    color: Colors.primary600,
    fontFamily: "open-sans-bold",
    marginBottom: 20,
  },
});
