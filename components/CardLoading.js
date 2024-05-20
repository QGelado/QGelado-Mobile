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
      <Skeleton colorMode="light" height={110} width={'100%'}/>
      <View style={Styles.boxVerticalStartLoader}>
        <Skeleton colorMode="light" width={"70%"} height={20}/>
        <Skeleton colorMode="light" width={"85%"} height={15}/>
        <View style={Styles.boxHorizontalSpace}>
          <Skeleton colorMode="light" width={35} height={25}/>
          <Skeleton colorMode="light" width={25} height={25} radius="round"/>
        </View>
      </View>
    </MotiView>
  );
};

export default CardLoading;
