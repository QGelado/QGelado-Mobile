import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';

import { SvgXml } from 'react-native-svg';
import WaveSvg from '../assets/svgs/wave';
import route from '../BackendEndpoint';

async function alertMessage(titulo = "Erro", texto= "Alguma coisa deu errado!")  {
  Alert.alert(titulo, texto, [
    {
      text: 'OK', onPress: () => console.log('OK')},
    ]
  );
}

async function guardaToken(token, id_number){
  await SecureStore.setItemAsync('token_usuario', token);
  await SecureStore.setItemAsync('id_usuario', id_number);
}


const CadastroUsuario = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  function cadastraUsuarioAPI() {
    const obj = {
      nome: nome,
      email: email,
      endereco: endereco,
      senha: senha,
      telefone: parseInt(telefone),
    };

    fetch(`${route}/usuario`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) =>{ 
        const statusCode = response.status;

        if(statusCode == 200 || statusCode == 201) {
          return response.json();
        }
        
        return Promise.reject(response);

      })
      .then((json) => {
        const token = json.token;
        const idUsuario = json.data._id;

        guardaToken(token, idUsuario);

        alertMessage(`Seja bem vindo, ${json.data.nome}!`, "Agora você pode aproveitar e escolher o seu sorvete preferido!");
        
        navigation.navigate('navbar');
      })
      .catch((error) => {
        console.log("Um erro aconteceu!");

        error.json().then((json) => {
          alertMessage("Erro ao cadastrar usuário!", json.message);
        })
      });
  }

  return (
    <SafeAreaView style={styles.container__main}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            height: Dimensions.get('screen').height,
          }}>
          <Text style={styles.textTitleMain}>Cadastre-se</Text>

          <View style={styles.mainContainerInputs}>
            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Nome</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Digite o seu nome'}
                value={nome}
                onChangeText={setNome}
              />
            </View>

            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Digite o seu email'}
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Senha</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Digite a sua senha'}
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Telefone</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'1199999-9999'}
                value={telefone}
                onChangeText={setTelefone}
              />
            </View>

            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Endereço</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Digite o seu endereço'}
                value={endereco}
                onChangeText={setEndereco}
              />
            </View>

            <Pressable
              style={styles.textInputSalvar}
              onPress={() => cadastraUsuarioAPI()}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'poppins-regular',
                }}>
                Cadastre-se
              </Text>
            </Pressable>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Text style={styles.textLogin}> Já possui uma conta? Faça </Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text
                  style={[
                    styles.textLogin,
                    { textDecorationLine: 'underline' },
                  ]}>
                  Login
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.container__wave}>
            <SvgXml xml={WaveSvg} width="100%" height="50%" />
            <Image
              style={styles.logoWaveSvgImage}
              source={require('../assets/logo/logo-qgelado.png')}
            />
          </View>
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
  textLogin: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
  },
  container__wave: {
    width: Dimensions.get('screen').width,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  logoWaveSvgImage: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default CadastroUsuario;
