import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';

function OurStatusBarRight(props) {
  
  return (
    <Pressable onPress={() => props.navegacao.navigate('Perfil-Usuario')} 
      style={{
        backgroundColor: '#C3EFFF',
        borderRadius: 100,
        marginRight: 20,
        padding: 5
      }}>
      <Image
        style={{
          width: 25,
          height: 25,
        }}
        source={require('../assets/statusBar/profile-icone.png')}
      />
    </Pressable>
  );
}

export default OurStatusBarRight;
