import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Pedidos = ({item}) => {

  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  return (
    <View style={styles.container__main}>
      <View style={styles.main__containerItens}>
          <Text style={styles.main__dataPedido}>{item.data}</Text>
          <Image source={require("../assets/pedidos/icone-pedidos.png")} />
      </View>

      <View style={styles.main__containerItens}>
        <Text>R$ {item.sorvetes[0].nome}</Text>
        <Text>R$ {item.sorvetes[0].preco}</Text>
      </View>

      <View style={styles.main__containerItens}>
        <Text>{item.sorvetes.length > 1 ? "..." : ""}</Text>
      </View>
      
      <View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container__main:{
    width: '80%',
    aspectRatio: 7.3 / 2,
    height: 100,
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
    marginRight: 10,
  },
  main__dataPedido:{
    fontSize: 10,
    fontFamily: "poppins-regular",
    color: "#197CFF"
  }
});

export default Pedidos;
