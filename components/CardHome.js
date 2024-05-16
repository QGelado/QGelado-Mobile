import React from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../style/CardStyles";
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

export default CardHome;
