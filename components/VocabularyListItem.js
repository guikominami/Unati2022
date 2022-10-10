import { View, Text, StyleSheet, Pressable } from 'react-native';

import Colors from '../constants/colors';

function VocabularyListItem({ word, onPress }){
  return(
    <View style={styles.listItem}>
      <Pressable 
        android_ripple={{color: '#cccccc'}} 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.itemText} adjustsFontSizeToFit>
          {word}
        </Text>
      </Pressable>      
    </View>
  )
}

export default VocabularyListItem;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    paddingVertical: 20,
    paddingLeft: 14,
    marginVertical: 2,
    marginHorizontal: 8,
    backgroundColor: Colors.primary600,
    elevation: 4,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});