import React from "react";
import { View, Image, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useCartStore } from "../store/cartStore";

const CardHome = ({ sorvete }) => {
  const navigation = useNavigation();
  const [addToCart] = useCartStore((state) => [
    state.addToCart
  ])
  const addCart = () =>{
    addToCart(sorvete)
    Alert.alert(`${sorvete?.nome} foi adicionado ao carrinho!`)
  }
  return (
    <TouchableOpacity
      style={[Styles.boxVerticalCenter, Styles.cardProduct]}
      onPress={() => navigation.navigate("Sorvete", {id: sorvete?._id})}
    >
      <View style={Styles.imgProduct}>
        <Image
          source={{
            uri: `https://6sncggx0-3000.brs.devtunnels.ms${sorvete?.imagem}`,
          }}
          style={{ width: 50, height: 60, objectFit: "contain" }}
        />
      </View>
      <View style={Styles.boxVerticalStart}>
        <Text style={Styles.titleCard} numberOfLines={1}>{sorvete?.nome?.length > 13 ? sorvete?.nome.slice(0, 13) + "..." : sorvete?.nome}</Text>
        <Text style={Styles.descriptionCard} numberOfLines={2}>
          {sorvete?.marca ? sorvete?.descricao?.slice(0, 20) + "..." : sorvete?.sabor}
        </Text>
        <View style={Styles.boxHorizontalSpace}>
          <View style={Styles.boxHorizontalCenter}>
            <Text style={Styles.textPriceRs}>R$</Text>
            <Text style={Styles.textPrice}>{sorvete?.preco}</Text>
          </View>
          <TouchableOpacity 
            style={Styles.buttonCard} 
            onPress={addCart} 
          >
            <Ionicons name="cart-outline" size={18} color="#FF90C8" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  titleCard:{
    fontFamily: 'poppins-bold',
    color: '#380000',
    fontSize: 18,
    margin: 0,
    width: '100%'
  },
  descriptionCard:{
    fontFamily: 'poppins-regular',
    color: '#380000',
    margin: 0,
  },

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
  imgProduct: {
    backgroundColor:'#F4FCFF',
    borderRadius: 20,
    width: '100%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCard: {
    color: '#FF90C8',
    backgroundColor:'#FFD7EB',
    padding: 5,
    borderRadius: 100,
  },
  textPrice: {
    fontFamily:'titan-one',
    color:'#197CFF',
    fontSize: 19,
    margin: 0,
  },
  textPriceRs: {
    fontFamily:'titan-one',
    color:'#FF40A0',
    fontSize: 12,
    margin: 0,
  },
})

export default CardHome;
