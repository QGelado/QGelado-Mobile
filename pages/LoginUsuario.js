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

import { useFonts } from 'expo-font';
import { SvgXml } from 'react-native-svg';
import WaveSvg from '../assets/svgs/wave';

const LoginUsuario = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
      'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
      'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    });
  
    return (
      <SafeAreaView style={styles.container__main}>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', height: Dimensions.get("screen").height, }}>
            <Text style={styles.textTitleMain}>Login</Text>
  
            <View style={styles.mainContainerInputs}>
  
              <View style={styles.inputContainerTitle}>
                <Text style={styles.titleSecundaryTitle}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Digite o seu email'}
                />
              </View>
  
              <View style={styles.inputContainerTitle}>
                <Text style={styles.titleSecundaryTitle}>Senha</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Digite sua senha'}
                  secureTextEntry={true}
                />
              </View>
  
              <Pressable
                style={styles.textInputSalvar}
                onPress={() => navigation.navigate('navbar')}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'poppins-regular',
                  }}>
                  Login
                </Text>
              </Pressable>
  
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={styles.textLogin}> Já possui uma conta? Faça </Text>
                <Pressable>
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
  
  export default LoginUsuario;