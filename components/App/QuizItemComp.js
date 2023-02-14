import { View, Text, StyleSheet, Dimensions } from "react-native";

import Title from "../UI/Title";
import PrimaryButton from "../../components/UI/PrimaryButton";
import PhraseButton from "../../components/UI/PhraseButton";
import Colors from "../../constants/colors";
import Card from "../../components/UI/Card";
import AudioPlayerButton from "../../components/UI/AudioPlayerButton";
import ImageArea from "../../components/UI/ImageArea";

const QuizItemComp = (
    {
        wordPt, 
        image, 
        audio, 
        hasImage, 
        hasAudio, 
        option1, 
        option2, 
        title, 
        nextGuessHandler,
        isVocabulary,
    }
  ) => {

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Title alignCenter={false}>{title}</Title>
      </View>
      <View>
        <ImageArea imageFile={image} hasImage={hasImage} />
      </View>
      <Card>
        <View>
          <Text style={styles.title(isVocabulary)}>{wordPt}</Text>
        </View>
        <View style={styles.buttonsContainer(isVocabulary)}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              word={option1}
              onPress={nextGuessHandler.bind("this", 1)}
              isVocabulary={isVocabulary}              
            />
          </View>
          <View style={styles.buttonContainer(isVocabulary)}>
            <PrimaryButton
              word={option2}
              onPress={nextGuessHandler.bind("this", 2)}
              isVocabulary={isVocabulary}
            />
          </View>
        </View>
        <AudioPlayerButton audio={audio} hasAudio={hasAudio} />
      </Card>
    </View>
  );
};

export default QuizItemComp;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({

  rootContainer: (isVocabulary) => {
    if (isVocabulary){
      return{
        flex: 1,
        marginTop: 10,    
      }
    }
    else{
      return{
        flex: 1,
        flexDirection: "column",
        marginTop: deviceWidth < 380 ? 10 : 20,
      }      
    }
  },

  title: (isVocabulary) => {
    if (isVocabulary){
      return{
        fontSize: 34,
        textAlign: "center",
        color: Colors.primary600,
        fontFamily: "open-sans-bold",
        marginBottom: 20,   
      }
    }else{
      return{
        fontSize: 25,
        color: Colors.primary600,
        fontFamily: "open-sans-bold",
        marginBottom: 20,
      }
    }
  },

  buttonsContainer: (isVocabulary) => {
    const align = isVocabulary ? "row" : "column";
    return {
      flexDirection: align,
    };
  },

  buttonContainer: (isVocabulary) => {
    const flexNumber = isVocabulary ? 1 : 0;
    return {
        flex: flexNumber,
        width: "100%"
    };
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
  },
});
