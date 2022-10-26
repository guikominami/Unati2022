import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";

import VocabularyListItem from "../components/App/VocabularyListItem";

import { VOCABULARY } from "../data/data";
import { PHRASES } from "../data/data";

function VocabularyListScreen({ navigation, route }) {

  var database;
  if (route.params.dataType === "Vocabulary"){
    database = VOCABULARY;  
  }
  else{
    database = PHRASES;  
  }

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("VocabularyLearnScreen", {
        wordId: itemData.item.id,
        dataType: route.params.dataType
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
          data={database}
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
    marginTop: 14,
  },
});
