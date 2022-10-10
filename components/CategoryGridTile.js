import { Pressable, View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function CategoryGridTile({title, onPress}){
  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{color: '#cccccc'}} 
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title} >
            {title}
          </Text>
        </View>
      </Pressable>        
    </View>
  );

}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    backgroundColor: Colors.primary600,
    elevation: 4,
    overflow: 'hidden',
    borderWidth: 6,
    borderColor: Colors.primary800,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    //fontFamily: 'open-sans-bold',
    fontWeight: 'bold'
  }
});