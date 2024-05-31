import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Pressable,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import CadastroUsuario from './pages/CadastroUsuario';
import LoginUsuario from './pages/LoginUsuario';
import ExcluirUsuario from './pages/ExcluirUsuario';
import Navbar from './components/Navbar';
import * as Notifications from 'expo-notifications';

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    'titan-one': require('./assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={CadastroUsuario}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginUsuario}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Excluir"
          component={ExcluirUsuario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
