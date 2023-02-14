import { useState, useEffect } from "react";
import { Alert } from "react-native";

import QuizItemComp from "./QuizItemComp";

const QuizItem = (
    {
      wordPt,
      option1,
      option2,
      optionCorrect,
      onOptionCorrectSelected,
      audio,
      image,
      type,
      quizType,
    }
  ) => {

  var title;
  var hasAudio = true;
  var hasImage = true;
  var alignButtonsRow = true;
  var isVocabulary =true;

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
      hasAudio = false;
    } else if (quizType === 3) {
      title = "Desafio 3: Ouça o áudio e escolha a palavra correta.";
      hasImage = false;
    }
  } else {

    hasImage = false;
    alignButtonsRow = false;
    isVocabulary = false;

    if (quizType === 1) {
      title = "Desafio 1: Que frase é essa?";
      hasAudio = true;
    } else if (quizType === 2) {
      title = "Desafio 2: Que frase é essa?";
      hasAudio = false;
    }
  }

  return (
    <QuizItemComp
      wordPt={wordPt}
      image={image}
      audio={audio}
      hasImage={hasImage}
      hasAudio={hasAudio}
      option1={option1}
      option2={option2}
      title={title}
      nextGuessHandler={nextGuessHandler}
      isVocabulary={isVocabulary}
      alignButtonsRow={alignButtonsRow}
    />
  );
};

export default QuizItem;
