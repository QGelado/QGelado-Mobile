import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';
import route from '../BackendEndpoint';


const VisualizaUmPedido = (props) => {
  
  const [dadosPedidos, setDadosPedidos] = useState([{}]);
  const [colorStatusBackground, setColorStatusBackground] = useState(["#FEF2E5", "#CD6200"]);

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    async function recuperaDadosUsuario(){
        const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
        const pedidoRecuperado = await SecureStore.getItemAsync('pedido_atual');

        fetch(`${route}/pedidos/busca?codigo=${pedidoRecuperado}`, {
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

          setDadosPedidos(json);

        })
        .catch((error) => {
          console.log("Erro!:");
          console.log(error);
        })
    }

    recuperaDadosUsuario();
    
  }, []);

  useEffect(() =>{
    if(dadosPedidos.hasOwnProperty("status")){
      if(dadosPedidos[0].status == "Finalizado"){
        setColorStatusBackground(["#EBF9F1", "#1F9254"]);
      }else if(dadosPedidos[0].status == "A confirmar"){
          setColorStatusBackground(["#FBE7E8", "#A30D11"]);
      }else{
          setColorStatusBackground(["#FEF2E5", "#CD6200"]);
      }
    }
  }, [dadosPedidos])

  function displaySorvetes({item}){

    return (
      !item.hasOwnProperty("sabores")
      ? 
      <View style={styles.pedidos__containerList}>
        <View>
          <Text style={styles.containerList__textInformation}>{item.nome}</Text>
          <Text style={{fontSize: 10}}>{item.sabor}</Text>
        </View>
        <Text style={[styles.containerList__textInformation, {fontFamily: "poppins-regular"}]}>R$ {item.preco}</Text>
      </View>
      : 
      <View style={[styles.pedidos__containerList, {alignItems: "start"}]}>
        <View>
          <Text style={styles.containerList__textInformation}>{item.nome}</Text>
          
            {item['sabores'].map((e) => {
                return <Text style={{fontSize: 10}}>{e.sabor}</Text>    
            })}

            <Text style={{fontSize: 10}}>{item['recipiente']['nome']} - {item['recipiente']['quantidade']}</Text>    
        </View>
        <Text style={[styles.containerList__textInformation, {fontFamily: "poppins-regular", marginTop: 2}]}>R$ {item.preco}</Text>
      </View>
    )
    
  }



  return (
    <SafeAreaView style={styles.container__main}>
      <View style={{justifyContent: "flex-end", width: "81%" }}>
        <Text style={styles.textTitleMain}>Meu Pedido</Text>
      </View>

      {dadosPedidos[0].hasOwnProperty("_id") ? <View style={styles.main__containerPedido}>
          <View style={styles.containerPedidos__horarioEStatus}>
            <View>
                <Text style={styles.horarioEStatus__divisao__dataText}>{new Date(dadosPedidos[0].data).toLocaleTimeString("pt-BR").slice(0,5) + " - " + new Date(dadosPedidos[0].data).toLocaleDateString("pt-BR").slice(0,5)}</Text>

                <Text style={
                  {width: 100, 
                  textAlign: "center", 
                  padding: 3, 
                  borderRadius: 10,
                  backgroundColor: colorStatusBackground[0],
                  color: colorStatusBackground[1]}}>
                  {dadosPedidos[0].status}</Text>
            </View> 

            <Image source={require("../assets/pedidos/icone-pedidos.png")} style={{transform: [{rotate: '180deg'}]}} />
          </View>

          <FlatList 
            data={dadosPedidos[0]['sorvetes']}
            renderItem={({item}) => displaySorvetes({item})}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={() => (
              <View style={{ margin: 5 }} />
            )}
          />

          <View>
              <LinearGradient
                colors={['#6AAAFF', '#FF90C8']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{flex: 1, padding: 2, borderRadius: 5, margin: 5}}
              />
          </View>


          <View style={styles.containerPedidos__precoECodigo}> 
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.containerPedidos__preco__simboloPreco}>R$ </Text>
              <Text style={styles.containerPedidos__preco__valorTotal}>{dadosPedidos[0].preco["$numberDecimal"]}</Text>
            </View>
          </View>

          <View style={styles.containerPedidos__precoECodigo}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 13, color: "#197CFF", fontFamily: "poppins-regular"}}>Código:</Text>
              <Text style={{fontSize: 16, color: "#197CFF", fontFamily: "poppins-bold"}}>{dadosPedidos[0].codigo}</Text>
            </View>
          </View>

      </View> : ""}

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
    marginRight: 10,
    marginBottom: 10
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
  },
  pedidos__containerList:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  containerList__textInformation:{
    fontSize: 11,
    fontFamily: "poppins-bold",
    color: "#380000"
  },
  containerPedidos__precoECodigo:{
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 10,
    padding: 2
  },
  containerPedidos__preco__simboloPreco:{
    fontSize: 16,
    fontFamily: "titan-one",
    color: "#FF40A0"
  },
  containerPedidos__preco__valorTotal:{
    fontSize: 20,
    fontFamily: "titan-one",
    color: "#197CFF",
    marginLeft: 5
  }
  
});

export default VisualizaUmPedido;
