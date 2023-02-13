import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Alert } from "react-native";

import Title from "../UI/Title";
import PrimaryButton from "../../components/UI/PrimaryButton";
import PhraseButton from "../../components/UI/PhraseButton";
import Colors from "../../constants/colors";
import Card from "../../components/UI/Card";
import AudioPlayerButton from "../../components/UI/AudioPlayerButton";
import ImageArea from "../../components/UI/ImageArea";

const QuizItem = ({
  wordPt,
  option1,
  option2,
  optionCorrect,
  onOptionCorrectSelected,
  audio,
  image,
  type,
  quizType,
}) => {

  var title;
  var isAudio = true;
  var hasImage = true;

  const [currentOption, setCurrentOption] = useState();

  useEffect(() => {
    if (
      (currentOption !== undefined &&
        currentOption === 1 &&
        option1 === optionCorrect) ||
      (currentOption !== undefined &&
        currentOption === 2 &&
        option2 === optionCorrect)
    ) {
      onOptionCorrectSelected();
    } else if (currentOption != undefined) {
      Alert.alert("Resposta errada", "Tente novamente!", [
        { text: "OK", style: "cancel" },
      ]);
    }
    setCurrentOption();
  }, [currentOption, onOptionCorrectSelected]);

  function nextGuessHandler(optionSelected) {
    setCurrentOption(optionSelected);
  }

  if (type == "Vocabulary") {
    if (quizType === 1) {
      title = "Desafio 1: Que palavra é essa?";
    } else if (quizType === 2) {
      title = "Desafio 2: Olhe o desenho e escolha a palavra correta.";
      isAudio = false;
    } else if (quizType === 3) {
      title = "Desafio 3: Ouça o áudio e escolha a palavra correta.";
      hasImage = false;
    }

    console.log(image);

    return (
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Title>{title}</Title>
        </View>
        <View>
          <ImageArea imageFile={image} hasImage={hasImage} />
        </View>
        <Card>
          <View>
            <Text style={styles.title}>{wordPt}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                word={option1}
                onPress={nextGuessHandler.bind("this", 1)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                word={option2}
                onPress={nextGuessHandler.bind("this", 2)}
              />
            </View>
          </View>
          <AudioPlayerButton audio={audio} isAudio={isAudio}/>
        </Card>
      </View>
    );
  } else {

    if (quizType === 1) {
      title = "Desafio 1: Que frase é essa?";
    } else if (quizType === 2) {
      title = "Desafio 2: Que frase é essa?";
      isAudio = false;
    }

    return (
      <View style={styles_phrase.rootContainer}>
        <Title>{title}</Title>
        <Card>
          <View style={styles_phrase.titleContainer}>
            <Text style={styles_phrase.title}>{wordPt}</Text>
          </View>
          <View style={styles_phrase.buttonsContainer}>
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
};

export default QuizItem;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
  },
  titleContainer: {
    textAlign: "left",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    color: Colors.primary600,
    fontFamily: "open-sans-bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  }
});

const styles_phrase = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: deviceWidth < 380 ? 10 : 20,
  },
  titleContainer: {
    paddingHorizontal: 5,
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    color: Colors.primary600,
    fontFamily: "open-sans-bold",
    marginBottom: 20,
  }
});
