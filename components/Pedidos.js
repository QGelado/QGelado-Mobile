import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Pressable  } from 'react-native';
import { useFonts } from 'expo-font';

const Pedidos = ({item, navigation}) => {

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  let ImagemPedido = "";

  if(item.status == "Finalizado"){
      ImagemPedido = require("../assets/pedidos/confirmado.png");
  }else if(item.status == "A confirmar"){
      ImagemPedido = require("../assets/pedidos/a-confirmar.png");
  }else{
      ImagemPedido = require("../assets/pedidos/retirar.png");
  }


  return (
    <Pressable  style={styles.container__main} onPress={ () => navigation.navigate('Visualiza-Pedido')  }>
      <View style={styles.main__containerItens}>
          <Text style={styles.containerItens__dataPedidoText}>
          {new Date(item.data).toLocaleTimeString("pt-BR").slice(0,5) + " - " + new Date(item.data).toLocaleDateString("pt-BR").slice(0,5)}
          </Text>
          <Image source={require("../assets/pedidos/icone-pedidos.png")} />
      </View>

      <View style={styles.main__containerItens}>
        <Text style={styles.containerItens__pedidosText}>R$ {item.sorvetes[0].nome}</Text>
        <Text style={[styles.containerItens__pedidosText, {fontFamily: "poppins-regular"}]}>R$ {item.sorvetes[0].preco}</Text>
      </View>

      <View style={styles.main__containerItens}>
        <Text>{item.sorvetes.length > 1 ? "..." : ""}</Text>
      </View>
      
      <View style={[styles.main__containerItens, {marginTop: 10}]}>
        <View style={styles.main__statusPedidoContainer}>
            <Image source={ImagemPedido}/>
            <Text style={styles.statusPedidoContainer__itemCodigoText}>#{item.codigo}</Text>
        </View>

        <View style={[styles.main__statusPedidoContainer, {justifyContent: "center", alignItems: "center"}]}>
          <Text style={styles.statusPedidoContainer__codigoValorPedido}>R$</Text>
          <Text style={styles.statusPedidoContainer__valorPedido}>{item.preco["$numberDecimal"]}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container__main:{
    width: '80%',
    aspectRatio: 7.3 / 2,
    height: 110,
    padding: 10,
    backgroundColor: "#C3EFFF",
    borderRadius: 20,
    marginBottom: 20
  },
  main__containerItens:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  containerItens__dataPedidoText:{
    fontSize: 10,
    fontFamily: "poppins-regular",
    color: "#197CFF"
  },
  main__statusPedidoContainer:{
    flexDirection: "row"
  },
  containerItens__pedidosText:{
    fontSize: 11,
    fontFamily: "poppins-bold",
    color: "#380000"
  },
  statusPedidoContainer__itemCodigoText:{
    fontSize: 14,
    fontFamily: "poppins-regular",
    color: "#197CFF",
    marginLeft: 5
  },
  statusPedidoContainer__codigoValorPedido:{
    fontSize: 11,
    fontFamily: "titan-one",
    color: "#FF40A0"
  },
  statusPedidoContainer__valorPedido:{
    fontSize: 14,
    fontFamily: "titan-one",
    color: "#197CFF",
    marginLeft: 5
  }

});

export default Pedidos;
