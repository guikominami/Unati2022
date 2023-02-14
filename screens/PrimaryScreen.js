import { StyleSheet, View } from "react-native";

import { MAIN_MENU } from "../data/data";

import MenuLoader from "../components/UI/MenuLoader";
import Title from "../components/UI/Title";

const PrimaryScreen = ({ navigation }) => {
  const pressMenuItemHandler = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Title alignCenter={true}>UNATI</Title>
      </View>

      <View style={styles.buttonsContainer}>
        <MenuLoader
          menuData={MAIN_MENU}
          onPress={pressMenuItemHandler}
          numColumns={1}
          containerStyle={"styles.rootContainer"}
        />
      </View>
    </View>
  );
};

export default PrimaryScreen;

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
  },
});
