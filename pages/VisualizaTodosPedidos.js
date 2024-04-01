import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import * as SecureStore from 'expo-secure-store';

import Pedidos from '../components/Pedidos';
import route from '../BackendEndpoint';

const VisualzaTodosPedidos = (props) => {
  console.log("todos pedidos")
  const [pedidosData, setPedidosData] = useState("");
  
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
      <View>
        <Text style={styles.textTitleMain}>Meus Pedidos</Text>
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
});

export default VisualzaTodosPedidos;
