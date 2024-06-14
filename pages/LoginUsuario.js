import React, { useEffect, useState, useRef } from 'react';
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
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SvgXml } from 'react-native-svg';
import WaveSvg from '../assets/svgs/wave';
import route from '../BackendEndpoint';
import * as Notifications from 'expo-notifications';

import { useUserStore } from '../store/userStore';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const LoginUsuario = ({ navigation }) => {
  const [user, setUser] = useUserStore((state) => [state.user, state.signIn]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(checarToken() === true){
      navigation.navigate('navbar');
    }
  }, [])

  async function checarToken(){
    const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
    const idRecuperado = await SecureStore.getItemAsync('id_usuario');
    console.log("token rec", tokenRecuperado, "id rec", idRecuperado)
    return tokenRecuperado !== null && idRecuperado !== null
  }

  async function guardaToken(token, id_number) {
    await SecureStore.setItemAsync('token_usuario', token);
    await SecureStore.setItemAsync('id_usuario', id_number);
    console.log('guardei');
  }

  const signIn = async () => {
    console.log('Fazendo login');
    let token = '';
    try {
      token = await Notifications.getExpoPushTokenAsync();
    } catch {
      token = { data: '' };
    }

    fetch(`${route}/usuario/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        senha: password,
        tokenNotification: token.data.toString(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        const statusCode = response.status;

        if (statusCode == 200 || statusCode == 201) {
          return response.json();
        }

        return Promise.reject(response);
      })
      .then((json) => {
        console.log('Usuário', json);

        if (json) {
          const token = json.token;
          console.log(json);
          console.log(json.resultadoAtualizacao);
          const idUsuario = json.resultadoAtualizacao._id;
          setUser(json);
          SecureStore.setItemAsync('token_usuario', token)
            .then((res) => {
              console.log('Guardei o token', res);
            })
            .catch((erroToken) => {
              console.log('Erro token', erroToken);
            });
          SecureStore.setItemAsync('id_usuario', idUsuario)
            .then((res) => {
              console.log('Guardei o id', res);
              navigation.navigate('navbar');
            })
            .catch((erroId) => {
              console.log('Erro id', erroId);
            });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <SafeAreaView style={styles.container__main}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            height: Dimensions.get('screen').height,
          }}>
          <Text style={styles.textTitleMain}>Login</Text>

          <View style={styles.mainContainerInputs}>
            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Digite o seu email'}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={styles.inputContainerTitle}>
              <Text style={styles.titleSecundaryTitle}>Senha</Text>
              <TextInput
                style={styles.textInput}
                placeholder={'Digite sua senha'}
                secureTextEntry={true}
                onChangeText={(pwd) => setPassword(pwd)}
              />
            </View>

            <Pressable style={styles.textInputSalvar} onPress={signIn}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'poppins-regular',
                }}>
                Login
              </Text>
            </Pressable>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Text style={styles.textLogin}> Não possui uma conta?</Text>
              <Pressable onPress={() => navigation.navigate('Cadastro')}>
                <Text
                  style={[
                    styles.textLogin,
                    { textDecorationLine: 'underline' },
                  ]}>
                  Cadastre-se
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

export default LoginUsuario;
