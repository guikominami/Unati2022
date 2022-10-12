import { FlatList, StyleSheet, View, ImageBackground } from 'react-native';

import { CATEGORIES } from '../data/data';

import CategoryGridTile from '../components/UI/CategoryGridTile';

function PrimaryScreen({ navigation }){
  function renderCategoryItem(itemData){    
    function pressHandler(){
      navigation.navigate(itemData.item.page, {
          wordId: '', 
          type: 'word'
      });
    }
    
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        onPress={pressHandler}
      />
    );
  }
  
  return (
    <View style={styles.rootContainer}>
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item, index) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}      
      />
    </View>
  );  
}

export default PrimaryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 150,
    marginHorizontal: 15,
    marginVertical: 15
  },
});