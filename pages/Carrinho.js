import React, { useEffect, useState, useRef } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { useCartStore } from '../store/cartStore'

const Carrinho = () => {
  const [sorvetes, setSorvetes] = useCartStore((state) => [
      state.cart,
  ])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
          {
            sorvetes.map((sorvete) => {
              return (
                <>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.iconPlus}>V</Text>
                  </TouchableOpacity>
                  <View style={styles.wrapperImageCheck}>
                    <Image
                      source={{
                      uri:  `https://6sncggx0-3000.brs.devtunnels.ms/sorvete-padrao/image/${sorvete?.imagem}`,
                      }}
                      style={styles.productImage}
                    />
                </View>
                <View style={{justifyContent: 'space-between'}}>
                  <View>
                    <Text>{sorvete?.nome}</Text>
                    <Text>R$ {sorvete?.preco?.toFixed(2)?.replace(".", ",").toString()}</Text>
                  </View>
                  <View style={styles.wrapperCardBottom}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{fontWeight: '600'}}>-</Text>
                    </TouchableOpacity>
                    <Text style={{paddingHorizontal: 12}}>3</Text>
                    <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
                      <Text style={styles.iconPlus}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                </>
              )
            }
            )
          }
      </View>
    </SafeAreaView>
  );
};
export default Carrinho;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#E5F8FF',
    height: '100%'
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#E5F8FF',

  },
  wrapperImageCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F8FF',
  },
  productImage: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlus: {
    color: '#FF40A0',
    fontWeight: '600',
  },
  wrapperCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});