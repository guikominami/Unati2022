import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const Title = ({ children, alignCenter }) => {
  //passando parâmetro para o estilo do alinhamento do título
  return <Text style={[styles.title, styles.titleAlign(alignCenter)]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.white,
    textAlignVertical: "center",
    borderWidth: 4,
    borderColor: Colors.white,
    padding: 12,
    marginHorizontal: 26,
    marginBottom: 10,
  },

  titleAlign: (alignCenter) => {
    const align = alignCenter ?  "center" : "left";
    return {
      textAlign: align,
    };
  },
});
