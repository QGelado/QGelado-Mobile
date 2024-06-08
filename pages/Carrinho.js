import React, { useEffect, useState, useRef } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { useCartStore } from '../store/cartStore';
import route from '../BackendEndpoint';
import { Ionicons } from '@expo/vector-icons';

const Carrinho = () => {
  const [sorvetes, setSorvetes] = useCartStore((state) => [state.cart]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textTitleMain}>Carrinho</Text>
      <View style={styles.container}>
        {sorvetes.map((sorvete) => {
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
                    {sorvete?.sabor}
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
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.iconPlus}>-</Text>
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.iconPlus,
                          { paddingHorizontal: 12, fontSize: 16 },
                        ]}>
                        3
                      </Text>
                      <TouchableOpacity
                        style={[styles.button, { borderColor: 'green' }]}>
                        <Text style={styles.iconPlus}>+</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={{ marginLeft: 10, backgroundColor: '#FFC2E1', borderRadius: 20, padding: 5}}>
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
          40, 99
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
          style={{ padding: 20, borderRadius: 20, backgroundColor: '#6AAAFF' }}>
          <Text
            style={{ color: 'white', fontSize: 13, fontFamily: 'titan-one' }}>
            Continuar comprando
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 20, borderRadius: 20, backgroundColor: '#FF40A0' }}>
          <Text
            style={{ color: 'white', fontSize: 13, fontFamily: 'titan-one' }}>
            Finalizar pedido
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
