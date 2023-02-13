import { StyleSheet, View } from "react-native";
import Title from "../components/UI/Title";

function AboutScreen({ route }){
    return (
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Title>FICHA TÉCNICA</Title>          
        </View>
      </View>
    )
};

export default AboutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 50,
    marginVertical: 15,
  },
  titleContainer: {
    marginHorizontal: 20,    
  },
  buttonsContainer: {
    marginHorizontal: 75,    
    marginTop: 10,
  }
});
