import { View, Image, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const ImageArea = ({ imageFile, hasImage }) => {
    console.log(imageFile);
  if (hasImage) {
    return (
      <View style={styles.imageContainer}>
        <Image source={imageFile} style={styles.image} />;
      </View>
    );
  }
};

export default ImageArea;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    marginHorizontal: 24,
    borderWidth: 4,
    borderColor: Colors.primary500,
  },
  image: {
    width: "100%",
    height: 250,
  },
});
