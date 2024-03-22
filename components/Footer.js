import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

const Footer = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={{ flex: 1, justifyContent: "flex-end"}} >
        <View>
          <View style={styles.container__icons}>
            <Pressable
              onPress={() => props.navegacao.navigate('Editar-Perfil')}>
              <Image
                style={styles.imgs__icons}
                source={require('../assets/footer/footer-home-icon.png')}
              />
            </Pressable>

            <Pressable
              onPress={() => props.navegacao.navigate('Perfil-Usuario')}>
              <Image
                style={styles.imgs__icons}
                source={require('../assets/footer/footer-shop-icon.png')}
              />
            </Pressable>

            <Pressable
              onPress={() => props.navegacao.navigate('Editar-Perfil')}>
              <Image
                style={styles.imgs__icons}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container__icons: {
    width: Dimensions.get('screen').width,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imgs__icons: {
    width: 40,
    height: 40,
  },
});

export default Footer;
