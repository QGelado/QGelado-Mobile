import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';

import Pedidos from '../components/Pedidos';
import dataPedidosUnico from '../dataPedidosUnico';

const VisualizaUmPedido = (props) => {
  
  const [dadosPedidos, setDadosPedidos] = useState(dataPedidosUnico);

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  let colorStatusBackground = "";

  if(dadosPedidos[0].status == "Finalizado"){
      colorStatusBackground = ["#EBF9F1", "#1F9254"];
  }else if(dadosPedidos[0].status == "A confirmar"){
      colorStatusBackground = ["#FBE7E8", "#A30D11"];
  }else{
      colorStatusBackground = ["#FEF2E5", "#CD6200"];
  }

  /*
  useEffect(() => {
    fetch('https://r7b6tzdg-3000.brs.devtunnels.ms/pedidos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
*/

  return (
    <SafeAreaView style={styles.container__main}>
      <View style={{justifyContent: "flex-end", width: "81%" }}>
        <Text style={styles.textTitleMain}>Meu Pedido</Text>
      </View>

      <View style={styles.main__containerPedido}>
          <View style={styles.containerPedidos__horarioEStatus}>
            <View style={styles.horarioEStatus__divisao}>
                <Text style={styles.horarioEStatus__divisao__dataText}>{dadosPedidos[0].data}</Text>

                <Text style={
                  {width: 100, 
                  textAlign: "center", 
                  padding: 3, 
                  borderRadius: 10,
                  backgroundColor: colorStatusBackground[0],
                  color: colorStatusBackground[1]}}>
                  {dataPedidosUnico[0].status}</Text>
            </View> 

            <Image source={require("../assets/pedidos/icone-pedidos.png")} style={{transform: [{rotate: '180deg'}]}} />
          </View>

          <View style={styles.containerPedidos__sorvetes}>
          
          
          </View>

          <View style={styles.containerPedidos__linhaSeperadora}>
              <LinearGradient
                colors={['#6AAAFF', '#FF90C8']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{flex: 1, padding: 2, borderRadius: 5}}
              />
           
          </View>


          <View style={styles.containerPedidos__preco}> 
          
          </View>

          <View style={styles.containerPedidos__codigos}>
          
          </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5F8FF',
  },
  containerPedidos__horarioEStatus:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    marginLeft: 10,
    marginRight: 10
  },  
  horarioEStatus__divisao__dataText: {
    fontSize: 10,
    fontFamily: "poppins-regular",
    color: "#197CFF"
  },
  textTitleMain: {
    fontSize: 25,
    margin: 20,
    marginLeft: 15,
    fontFamily: 'titan-one',
    color: '#FF40A0',
  },
  main__containerPedido:{
    width: Dimensions.get('screen').width - 50,
    padding: 10,
    backgroundColor: "#C3EFFF",
    borderRadius: 20,
    marginBottom: 20
  }
  
});

export default VisualizaUmPedido;
