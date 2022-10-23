import { useContext, useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import PrimaryScreen from "./screens/PrimaryScreen";
import VocabularyLearnScreen from "./screens/VocabularyLearnScreen";
import VocabularyListScreen from "./screens/VocabularyListScreen";
import LoginScreen from "./screens/LoginScreen";
import AuthContentProvider, { AuthContext } from './store/auth-context';
import Colors from "./constants/colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary700 },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary700 },
      }}
    >
      <Stack.Screen
        name="PrimaryScreen"
        component={PrimaryScreen}
        options={{ 
          title: "Unati",
          headerRight: ({tintColor}) => 
          <IconButton 
            icon="exit" 
            color={tintColor} 
            size={24} 
            onPress={authCtx.logout}
          />
        }}
      />
      <Stack.Screen
        name="VocabularyLearnScreen"
        component={VocabularyLearnScreen}
        options={{ title: "Vocabulário" }}
      />
      <Stack.Screen
        name="VocabularyListScreen"
        component={VocabularyListScreen}
        options={{ title: "Lista de Vocabulário" }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
  );
}


function Root(){
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken(){
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  
  return (
    <>
      <StatusBar style="light" />
      <AuthContentProvider>
        <Root />
      </AuthContentProvider>        
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
