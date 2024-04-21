import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Carrinho = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>V</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/5/14/1/FNM_060114-Chocolate-Ice-Cream-Recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1400255820837.jpeg',
          }}
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text>Sorvete de chocolate</Text>
          <Text>R$ 300</Text>
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
    </View>
  );
};
export default Carrinho;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#E5F8FF',

  },
  wrapperImageCheck: {
    flexDirection: 'row',
    alignItems: 'center',
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