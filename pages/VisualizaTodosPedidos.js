import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useFonts } from 'expo-font';

import Pedidos from '../components/Pedidos';
import dataTest from '../dataTest';

const VisualzaTodosPedidos = (props) => {
  
  const [fontsLoaded] = useFonts({
    'titan-one': require('../assets/fonts/TitanOne-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

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
      <View>
        <Text style={styles.textTitleMain}>Meus Pedidos</Text>
      </View>

      <FlatList 
            data={dataTest}
            renderItem={({item}) => <Pedidos item={item} navigation={props.navigation}/>}
            keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'center',
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
