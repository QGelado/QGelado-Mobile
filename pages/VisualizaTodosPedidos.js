import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, TextInput,TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons'
import * as SecureStore from 'expo-secure-store';

import Pedidos from '../components/Pedidos';
import route from '../BackendEndpoint';

const VisualzaTodosPedidos = (props) => {
  const [pedidosData, setPedidosData] = useState("");
  const [pedidosDataOriginal, setPedidosDataoriginal] = useState([]);
  const [input, setInput] = useState('');


  const filterSorvetes = () => {
    if(input === ''){
      setPedidosData(pedidosDataOriginal);
    }else{
      setPedidosData(
      
        pedidosDataOriginal.filter( item => item.sorvetes[0].nome.toLowerCase().indexOf(input.toLowerCase()) > -1)
      
      )

    }
  }

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    async function recuperaDadosUsuario(){
        const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
        const idRecuperado = await SecureStore.getItemAsync('id_usuario');

        fetch(`${route}/pedidos/busca?idUsuario=${idRecuperado}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenRecuperado}`,
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) =>{ 
          const statusCode = response.status;

          if(statusCode == 200) {
            return response.json();
          }

          return Promise.reject(response);
        })
        .then((json) => {

          if(json.length == 0){
            setPedidosData("Você ainda não tem pedidos!");
          }else{
            setPedidosData(json);
            setPedidosDataoriginal(json);
          }
          
        })
        .catch((error) => {
          console.log("Erro!:");
          console.log(error);
          setPedidosData("Você ainda não tem pedidos!");
        });    
    }

    recuperaDadosUsuario()
  }, []);

  return (
    <SafeAreaView style={styles.container__main}>
      <View style={{textAlign: 'left', width: "100%"}}>
        <Text style={styles.textTitleMain}>Meus Pedidos</Text>
      </View>

      <View style={styles.boxHorizontalStart}>
          <TextInput 
            style={styles.inputFilter} 
            placeholder="Pesquise o seu sabor favorito"
            placeholderTextColor={'#C4C4C4'}
            onChangeText={text => {
              setInput(text)
            }}
          />
          <TouchableOpacity style={styles.buttonSearch} onPress={filterSorvetes}>
            <Ionicons name="search" size={18} color="#FF40A0" />
          </TouchableOpacity>
      </View>

      {pedidosData == "Você ainda não tem pedidos!" ? <Text style={{color: "#197CFF", fontSize: 16, fontFamily: 'poppins-regular'}}>{pedidosData}</Text>: <FlatList 
            data={pedidosData}
            renderItem={({item}) => <Pedidos item={item} navigation={props.navigation}/>}
            keyExtractor={item => item._id}
      />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#E5F8FF',
  },
  textTitleMain: {
    fontSize: 25,
    margin: 20,
    marginLeft: 15,
    fontFamily: 'titan-one',
    color: '#FF40A0',
  },
  boxHorizontalStart: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%'
  },
  inputFilter: {
    backgroundColor: '#fff',
    fontFamily: 'poppins-regular',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#C4C4C4',
    width: '85%',
  },
  buttonSearch: {
    color: '#FF40A0',
    backgroundColor:'#FFC2E1',
    padding: 13,
    borderRadius: 100,
  },
});

export default VisualzaTodosPedidos;
