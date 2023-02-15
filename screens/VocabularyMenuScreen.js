import { StyleSheet, View } from "react-native";

import { MENU_VOCABULARY } from "../data/data";

import MenuLoader from "../components/UI/MenuLoader";
import Title from "../components/UI/Title";

const VocabularyMenuScreen = ({ navigation }) => {
  const pressMenuItemHandler = (page, type, quizTypeSelected) => {
    navigation.navigate(page, {
      wordId: '', 
      dataType: type,
      quizType: quizTypeSelected    //Esse item vem do ID definido na cateforia e carregado no MenuLoader
    });
  }  

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Title alignCenter={true}>VOCABULÁRIO</Title>
      </View>
      <View style={styles.buttonsContainer}>
        <MenuLoader
          menuData={MENU_VOCABULARY}
          onPress={pressMenuItemHandler}
          numColumns={1}
        />
      </View>
    </View>
  );
};

export default VocabularyMenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 40,
  },
  buttonsContainer: {
    marginTop: 20,
    marginHorizontal: 35,
    marginVertical: 15,
  },
  titleContainer: {
    marginHorizontal: 20,
    textAlign: "center"
  },
});
