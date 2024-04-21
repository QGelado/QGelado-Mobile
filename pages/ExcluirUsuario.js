import React, {useState} from 'react';

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

import { useFonts } from 'expo-font';
import { SvgXml } from 'react-native-svg';
import WaveSvg from '../assets/svgs/wave';

const ExcluirUsuario = () => {

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <SafeAreaView style={styles.container__main}>
       
        <View style={styles.centeredView}>
        <Text style={styles.modalText}>Tem certeza que quer excluir sua conta?</Text>
          <View style={styles.modalView}>
            
            <Pressable 
              style={[styles.button, styles.buttonCancel]}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonExcluir]}>
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            
          </View>
        </View>

      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#E5F8FF',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#E5F8FF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    flexDirection:'row',
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    margin: 20,
    backgroundColor: '#2196F3',
  },
  buttonExcluir: {
    margin: 20,
    backgroundColor: '#FF40A0',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "poppins-regular",
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ExcluirUsuario;