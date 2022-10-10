import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import PrimaryButton from "./PrimaryButton";
import Card from "./Card";

import { Entypo } from "@expo/vector-icons";

function QuizItem({ wordPt, option1, option2, onOption1Selected, onOption2Selected }) {

  const [currentOption, setCurrentOption] = useState(); 

  useEffect(() => {
    if (currentOption === 1){
      onOption1Selected();
    }
    else if (currentOption === 2){
      onOption2Selected();
    }
    setCurrentOption();
  }, [currentOption, onOption1Selected, onOption2Selected]);

  function nextGuessHandler(optionSelected){
    setCurrentOption(optionSelected);
  }

  return (
    <View style={styles.rootContainer}>
      <Card>
        <View>
          <Text style={styles.title}>{wordPt}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton word={option1} onPress={nextGuessHandler.bind('this', 1)} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton word={option2} onPress={nextGuessHandler.bind('this', 2)} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name="sound" size={32} color={Colors.primary600} />
        </View>
      </Card>
    </View>
  );
}

export default QuizItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 20,
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
  },
  iconContainer: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
});
