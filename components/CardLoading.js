import React from "react";
import { View } from "react-native";
import Styles from "../style/CardStyles";
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

const CardLoading = () => {
  return (
    <MotiView 
      transition={{
        type: 'timing',
      }}
      style={[Styles.boxVerticalCenter, Styles.cardProduct]}
      onPress={() => navigation.navigate("Editar-Perfil")}
    >
      <Skeleton  style={Styles.imgProduct}/>
      <View style={Styles.boxVerticalStart}>
        <Skeleton  style={{ backgroundColor: "#adadad", width: "70%", height: 20,}}/>
        <Skeleton  style={{ backgroundColor: "#adadad", width: "85%", height: 20,}}/>
        <View style={Styles.boxHorizontalSpace}>
          <Skeleton  style={Styles.boxHorizontalCenter}/>
          <Skeleton  style={{ backgroundColor: "#adadad", width: "30%", height: 20,}}/>
          <Skeleton  style={{ backgroundColor: "#adadad", width: 20, height: 20, borderRadius: 100}}/>
        </View>
      </View>
    </MotiView>
  );
};

export default CardLoading;
