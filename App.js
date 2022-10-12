import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppLoading } from "expo-app-loading";

import PrimaryScreen from "./screens/PrimaryScreen";
import VocabularyLearnScreen from "./screens/VocabularyLearnScreen";
import VocabularyListScreen from "./screens/VocabularyListScreen";
import PhrasesLearnScreen from "./screens/PhrasesLearnScreen";
import PhrasesListScreen from "./screens/PhrasesListScreen";
import Colors from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer style={styles.rootContainer}>       
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary800 },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.primary700 }
          }}        
        >
          <Stack.Screen 
            name="PrimaryScreen" 
            component={PrimaryScreen} 
            options={{ title: 'Unati' }}
          />
          <Stack.Screen 
            name="VocabularyLearnScreen" 
            component={VocabularyLearnScreen} 
            options={{ title: 'Vocabulário' }}
          />
          <Stack.Screen 
            name="VocabularyListScreen" 
            component={VocabularyListScreen} 
            options={{ title: 'Lista de Vocabulário' }}
          />
          <Stack.Screen 
            name="PhrasesLearnScreen" 
            component={PhrasesLearnScreen} 
            options={{ title: 'Frases' }}
          />
          <Stack.Screen 
            name="PhrasesListScreen" 
            component={PhrasesListScreen} 
            options={{ title: 'Lista de Frases' }}            
          />         
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },    
});
