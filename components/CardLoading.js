import React from "react";
import { View, StyleSheet } from "react-native";
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

const Styles = StyleSheet.create({
  boxVerticalCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%'
  },
  boxVerticalStart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
    gap: -5
  },
  boxVerticalStartLoader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
    gap: 5
  },
  boxHorizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  boxHorizontalSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%'
  },
  boxHorizontalStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%'
  },
  cardProduct: {
    backgroundColor:'#fff',
    borderRadius: 20,
    flexGrow: 1,
    width: '45%',
    maxWidth: '48%'
  },
})

export default CardLoading;
