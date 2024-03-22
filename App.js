import { Text, SafeAreaView, StyleSheet, Image, View, Pressable, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// or any files within the Snack
import EditarPerfilUsuario from './pages/EditarPerfilUsuario';
import PerfilUsuario from './pages/PerfilUsuario';
import OurStatusBarRight from './components/OurStatusBarRight';
import OurStatusBarLeft from './components/OurStatusBarLeft';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

// Excluir tela depois, ela serve apenas para organizar a estrutura do app.
function Cadastro({ navigation }) {
  return (
    <Pressable  style={styles.textInputSalvar}  
    onPress={() => navigation.navigate('navbar')}>
            <Text>Ir</Text>
    </Pressable>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen
          name="navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={(props) => ({
            headerRight: () => (
              <OurStatusBarRight navegacao={props.navigation} />
            ),
            headerLeft: (props) => <OurStatusBarLeft />,
            headerTitle: () => {},
            headerStyle: { backgroundColor: '#E5F8FF' },
            headerTintColor: '#fff',
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Excluir depois 
const styles = StyleSheet.create({
  textInputSalvar: {
    width: '80%',
    aspectRatio: 15 / 2,
    height: 50,
    fontSize: 14,
    padding: 10,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#C3EFFF',
  },
});
