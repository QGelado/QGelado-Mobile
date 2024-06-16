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
} from 'react-native';

import { SvgXml } from 'react-native-svg';
import WaveSvg from '../assets/svgs/wave';
import { useNavigation } from '@react-navigation/native';
import route from '../BackendEndpoint'
import * as SecureStore from 'expo-secure-store';

const ExcluirUsuario = async () => {
  const id = await SecureStore.getItemAsync('id_usuario');
  const navigation = useNavigation()

  const [usuario, setUsuario] = useState({})

  const [modalVisible, setModalVisible] = useState(false);

  const deletarUsuario = () => {
    fetch(`${route}/usuario/${id}`, {
        method: 'DELETE'
      })
      .then((response) => {
        const statusCode = response.status;
  
        if(statusCode == 200) {
          return response.json();
        }
  
        return Promise.reject(response);
      })
      .then(( json ) => {
        console.log(json)
        navigation.navigate("Login")
      })
      .catch((error) => {
        console.log(error);
        return null
      })
  }

  const getUsuario = () => {
      fetch(`${route}/usuario/${id}`, {
        method: 'GET'
      })
      .then((response) => {
        const statusCode = response.status;
  
        if(statusCode == 200) {
          return response.json();
        }
  
        return Promise.reject(response);
      })
      .then(( json ) => {
        setUsuario(json)
      })
      .catch((error) => {
        console.log(error);
        return null
      })
    }

  useEffect(() => {
      getUsuario()
  })

  return (
    <View style={styles.centeredView}>
      <SafeAreaView style={styles.container__main}>
       
        <View style={styles.centeredView}>
        <Text style={styles.modalText}>Tem certeza que quer excluir sua conta?</Text>
          <View style={styles.modalView}>
            
            <Pressable 
              style={[styles.button, styles.buttonCancel]}
              onPress={() => navigation.navigate('Home')}
              >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonExcluir]}
              onPress={deletarUsuario}
              >
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