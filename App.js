import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// or any files within the Snack
import CadastroUsuario from './pages/CadastroUsuario';
import LoginUsuario from './pages/LoginUsuario';
import ExcluirUsuario from './pages/ExcluirUsuario';
import Carrinho from './pages/Carrinho';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

export default function App() {

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

        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    

  );
}
