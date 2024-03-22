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
    <Pressable onPress={() => props.navegacao.navigate('Perfil-Usuario')}>
      <Image
        style={{
          width: 20,
          height: 20,
          backgroundColor: '#C3EFFF',
          borderRadius: 100,
          marginRight: 20
        }}
        source={require('../assets/statusBar/profile-icone.png')}
      />
    </Pressable>
  );
}

export default OurStatusBarRight;
