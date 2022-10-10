import { View, FlatList } from 'react-native';

import { VOCABULARY } from '../data/data';

import QuizItem from '../components/QuizItem';

function VocabularyListScreen(){

  return (
    <View>
      <FlatList 
        data={VOCABULARY} 
        renderItem={(itemData) => {
          return(
            <QuizItem 
              word={itemData.item.optionPt} 
              image={itemData.item.image}
            />
          )
        }}        
        keyExtractor={(item, index) => {
          return item.id;
        }} 
      />
    </View>    
  );
}

export default VocabularyListScreen;