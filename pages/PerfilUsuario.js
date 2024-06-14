import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import route from '../BackendEndpoint';
import * as SecureStore from 'expo-secure-store';

import { useFonts } from 'expo-font';

const PerfilUsuario = ({ navigation }) => {
  const [nomeUser, setNomeUser] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  async function recuperaDadosUsuario() {
    const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
    const idRecuperado = await SecureStore.getItemAsync('id_usuario');
    console.log("idrec",idRecuperado, tokenRecuperado);


    fetch(`${route}/usuario/${idRecuperado}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenRecuperado}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        const statusCode = response.status;

        if (statusCode == 200) {
          return response.json();
        }

        return Promise.reject(response);
      })
      .then((json) => {
        setNomeUser(json.nome)  
        setEmail(json.email)  
        setTelefone(json.telefone.toString()) 
        setEndereco(json.endereco) 
        console.log("Perfil",json);
        console.log("Perfil id",idRecuperado);

      })
      .catch((error) => {
        console.log('Erro!:');
        console.log(error);
      });
  }

  useEffect(() => {
    recuperaDadosUsuario();

  }, []);

  return (
    <SafeAreaView style={styles.container__main}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textTitleMain}>Perfil usuário</Text>

        <View style={styles.mainContainerInputs}>
          <View style={styles.inputContainerTitle}>
            <Text style={styles.titleSecundaryTitle}>Nome</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Wilson Vendramel'}
              value={nomeUser}
              onChangeText={setNomeUser}
            />
          </View>

          <View style={styles.inputContainerTitle}>
            <Text style={styles.titleSecundaryTitle}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'vendramel2890@gmail.com'}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainerTitle}>
            <Text style={styles.titleSecundaryTitle}>Telefone</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'(11) 98112-1982'}
              value={telefone}
              onChangeText={setTelefone}
            />
          </View>

          <View style={styles.inputContainerTitle}>
            <Text style={styles.titleSecundaryTitle}>Endereço</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Av. Nordestina, 1500'}
              value={endereco}
              onChangeText={setEndereco}
            />
          </View>

          <Pressable
            style={styles.textInputSalvar}
            onPress={() => navigation.navigate('Editar-Perfil')}>
            <Text
              style={{ textAlign: 'center', fontFamily: 'poppins-regular' }}>
              Editar
            </Text>
          </Pressable>

          <Pressable style={styles.textInputSalvar} onPress={() => navigation.navigate('Excluir-Usuario')}>
            <Text
              style={{ textAlign: 'center', fontFamily: 'poppins-regular' }}>
              Excluir conta
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5F8FF',
  },
  mainContainerInputs: {
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerTitle: {
    marginTop: 15,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textTitleMain: {
    fontSize: 25,
    margin: 20,
    marginLeft: 15,
    fontFamily: 'titan-one',
    color: '#FF40A0',
  },
  titleSecundaryTitle: {
    fontFamily: 'poppins-bold',
    fontSize: 14,
    marginLeft: 10,
  },
  textInput: {
    width: '80%',
    aspectRatio: 15 / 2,
    height: 50,
    fontSize: 14,
    padding: 10,
    margin: 'auto',
    borderRadius: 50,
    backgroundColor: 'white',
    fontFamily: 'poppins-regular',
  },
  textInputSalvar: {
    width: '80%',
    aspectRatio: 15 / 2,
    height: 50,
    fontSize: 14,
    padding: 10,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3EFFF',
  },
});

export default PerfilUsuario;
