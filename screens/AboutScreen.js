import { StyleSheet, View, Text, FlatList } from "react-native";

import Colors from "../constants/colors";

function AboutScreen({ route }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Equipe:
        </Text>
        <FlatList
          data={[
            { key: "Naine Terena de Jesus" },
            { key: "Tatiana Dias" },
            { key: "Alessandra Alonso" },
            { key: "Arcênio Dias" },
            { key: "Dhoze Kali Sini" },
            { key: "Niara Terena" },
            { key: "Évelin Hekere" },
            { key: "Gustavo Caboco Wapixana" },
            { key: "Karine Mattos - Instituto Elevar" },
            { key: "Sane Martins" },
            { key: "Guilherme Kominami" },
            { key: "" },
            { key: "Realização:" , isTitle: true},
            { key: "Oráculo Comunicação, Educação" },
            { key: "e Cultura" },
            { key: "" },
            { key: "Apoio:" , isTitle: true},
            { key: "Keepers of the Earth Team" },
            { key: "Equipo Guardianes de la Tierra Cultural Survival" },
          ]}
          renderItem={({ item }) => <Text style={styles.item(item.isTitle)}>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 10,
    marginVertical: 15,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
    height: 32,
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  container: {
    paddingTop: 5,
  },

  item: (isTitle) => {
    const fontType = isTitle ? "open-sans-bold" : "open-sans";
    const itemHeight = isTitle ? "open-sans-bold" : "open-sans";
    return {
      paddingHorizontal: 10,
      fontSize: 18,
      height: 25,
      fontFamily: fontType,
      color: Colors.primary500,
    };
  },
})
