import React, { useEffect, useState, useRef } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import { useCartStore } from '../store/cartStore';
import route from '../BackendEndpoint';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';

const Carrinho = ({navigation}) => {
  const [cart, removeFromCart, addToCart] = useCartStore((state) => [state.cart, state.removeFromCart, state.addToCart]);
  const totalPrice = cart.reduce((acc, cur) => acc + cur.preco, 0)

  const cadastrarSorvetesPersonalizados = async () => {
    const pedidos = [];
    const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');

    const promises = cart.map(async (sorvete) => {
      if (sorvete.sabores) {
        try {
          const response = await fetch(`${route}/sorvete-personalizado`, {
            method: 'POST',
            body: JSON.stringify(sorvete),
            headers: {
              Authorization: `Bearer ${tokenRecuperado}`,
              'Content-type': 'application/json; charset=UTF-8',
            },
          });

          if (response.status === 200 || response.status === 201) {
            const json = await response.json();
            const dadosSorvete = {
              tipo: 'sorvete-personalizado',
              id: json.data._id,
            };
            pedidos.push(dadosSorvete);
          } else {
            throw new Error('Failed to create sorvete-personalizado');
          }
        } catch (error) {
          console.log('Um erro aconteceu!', error);
          Alert.alert('Erro ao cadastrar sorvetes personalizados!', error.message, [
            { text: 'OK', onPress: () => console.log('OK') },
          ]);
        }
      } else {
        const dadosSorvete = {
          tipo: 'sorvete-padrao',
          id: sorvete._id,
        };
        pedidos.push(dadosSorvete);
      }
    });

    await Promise.all(promises);
    return pedidos;
  };

  const finalizarPedido = async () => {
    const pedidos = await cadastrarSorvetesPersonalizados();
    const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
    const idRecuperado = await SecureStore.getItemAsync('id_usuario');

    const pedido = {
      sorvetes: pedidos,
      preco: totalPrice,
      usuario: idRecuperado,
    };

    console.log("pedido", pedido);

    try {
      const response = await fetch(`${route}/pedidos`, {
        method: 'POST',
        body: JSON.stringify(pedido),
        headers: {
          Authorization: `Bearer ${tokenRecuperado}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        Alert.alert("Pedido cadastrado com sucesso", "Aguarde a notificação de confirmação para vir retirar", [
          { text: 'OK', onPress: () => console.log('OK') },
        ]);
      } else {
        throw new Error('Failed to create pedido');
      }
    } catch (error) {
      console.log("pedido", pedido);
      console.log('Um erro aconteceu!', error);
      Alert.alert('Erro ao cadastrar pedido!', error.message, [
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  };
  
  return (
    <ScrollView style={{paddingBottom: 10}}>
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textTitleMain}>Carrinho</Text>
      <View style={styles.container}>
        {cart.map((sorvete) => {
          return (
            <View
              style={{
                backgroundColor: '#FFD7EB',
                width: '90%',
                borderRadius: 10,
                padding: 10,
                marginBottom: 20
              }}>
              <View style={{ justifyContent: 'space-between' }}>
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.containerList__textInformation}>
                    {sorvete?.nome}
                  </Text>
                  <Text style={{ fontSize: 11, fontFamily: 'poppins-regular' }}>
                    {sorvete?.sabor ? sorvete?.sabor : sorvete.descricao}
                  </Text>
                </View>

                <View style={styles.wrapperCardBottom}>
                  <Text
                    style={{
                      color: '#FF40A0',
                      fontFamily: 'poppins-bold',
                      fontSize: 14,
                    }}>
                    R${' '}
                    {sorvete?.preco?.toFixed(2)?.replace('.', ',').toString()}
                  </Text>

                  <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FF90C8',
                        borderRadius: 10,
                      }}>
                      <TouchableOpacity style={styles.button} onPress={() => removeFromCart(sorvete)}>
                        <Text style={styles.iconPlus}>-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.button, { borderColor: 'green' }]}
                        onPress={() => addToCart(sorvete)}>
                        <Text style={styles.iconPlus}>+</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={{ marginLeft: 10, backgroundColor: '#FFC2E1', borderRadius: 20, padding: 5}} onPress={() => addCart(sorvete)}>
                      <Ionicons name="trash" size={20} color="#FF40A0" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
          marginRight: 20,
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 11,
            fontFamily: 'titan-one',
            color: '#FF40A0',
            marginTop: 8,
            marginRight: 5,
          }}>
          R$
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'titan-one',
            color: '#197CFF',
          }}>
          {totalPrice}
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{ padding: 20, borderRadius: 20, backgroundColor: '#6AAAFF' }}
          onPress={() => navigation.navigate('Home')}
          >
          <Text
            style={{ color: 'white', fontSize: 13, fontFamily: 'titan-one' }}>
            Continuar comprando
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 20, borderRadius: 20, backgroundColor: '#FF40A0' }} onPress={finalizarPedido}>
          <Text
            style={{ color: 'white', fontSize: 13, fontFamily: 'titan-one' }}>
            Finalizar pedido
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ScrollView>
  );
};
export default Carrinho;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#E5F8FF',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    marginBottom: 20,
    backgroundColor: '#E5F8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlus: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  wrapperCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitleMain: {
    fontSize: 25,
    margin: 20,
    marginLeft: 15,
    fontFamily: 'titan-one',
    color: '#197CFF',
  },
  containerList__textInformation: {
    fontSize: 11,
    fontFamily: 'poppins-bold',
    color: '#380000',
  },
});
