import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Title({children}){
  return(
    <Text style={styles.title}>{children}</Text>    
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 4,
    borderColor: Colors.white,
    padding: 12,
    marginHorizontal: 26,
    marginBottom: 10
  }
});