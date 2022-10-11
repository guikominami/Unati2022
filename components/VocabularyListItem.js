import { View, Text, StyleSheet, Pressable } from 'react-native';

import Colors from '../constants/colors';

function VocabularyListItem({ word, onPress }){
  return(
    <View style={styles.listItem}>
      <Pressable 
        android_ripple={{color: '#cccccc'}} 
        onPress={onPress}
        style={styles.button}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.itemText} adjustsFontSizeToFit numberOfLines={2}>
            {word}
          </Text>
        </View>
      </Pressable>      
    </View>
  )
}

export default VocabularyListItem;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',    
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 2,
    marginHorizontal: 8,
    backgroundColor: Colors.primary600,
    elevation: 4,
    //flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',      
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',  
  },    
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    flex: 1,    
  },
});