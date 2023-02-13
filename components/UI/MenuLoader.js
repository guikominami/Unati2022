import { FlatList, StyleSheet, View } from 'react-native';

import CategoryGridTile from './CategoryGridTile';

const MenuLoader = ({ menuData, onPress, numColumns }) => {
  const renderCategoryItem = (itemData) => {    
    return (
      //PASSAR PARÂMETRO DE VOLTA COM A PÁGINA CLICADA
      <CategoryGridTile 
        title={itemData.item.title} 
        onPress={
          onPress.bind(
            "this", 
            itemData.item.page, 
            itemData.item.type,
            itemData.item.id,
          )
        }  
      />
    );
  }
  
  return (
    <View>
      <FlatList 
        data={menuData} 
        keyExtractor={(item, index) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={numColumns}      
      />
    </View>
  );  
}

export default MenuLoader;