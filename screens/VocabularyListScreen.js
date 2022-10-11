import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";

import { VOCABULARY } from "../data/data";

import VocabularyListItem from "../components/VocabularyListItem";

import Colors from "../constants/colors";

function VocabularyListScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("VocabularyLearnScreen", {
        wordId: itemData.item.id,
        size: itemData.length,
      });
    }

    return (
      <VocabularyListItem
        word={itemData.item.optionPt}
        onPress={pressHandler}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.listContainer}>
        <FlatList
          data={VOCABULARY}
          keyExtractor={(item, index) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
          maxToRenderPerBatch={10}
        />
      </View>
    </SafeAreaView>
  );
}

export default VocabularyListScreen;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 4,
  },
});
