import React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function OurStatusBarLeft() {

  const navigation = useNavigation();
  
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Image
        style={{ width: 15, height: 20, marginLeft: 20 }}
        source={require('../assets/statusBar/voltar-icone.png')}
      />
      </Pressable>
  );
}

export default OurStatusBarLeft;
