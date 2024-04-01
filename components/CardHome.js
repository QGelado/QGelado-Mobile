import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../style/CardStyles";
import { Ionicons } from "@expo/vector-icons";


const CardHome = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[Styles.boxVerticalCenter, Styles.cardProduct]}
      onPress={() => navigation.navigate("Editar-Perfil")}
    >
      <View style={Styles.imgProduct}>
        <Image
          source={{
            uri: `https://6sncggx0-3000.brs.devtunnels.ms${product?.imagem}`,
          }}
          style={{ width: 50, height: 60, objectFit: "contain" }}
        />
      </View>
      <View style={Styles.boxVerticalStart}>
        <Text style={Styles.titleCard}>{product?.nome?.slice(0, 16)}</Text>
        <Text style={Styles.descriptionCard}>
          {product?.descricao?.slice(0, 20) + "..."}
        </Text>
        <View style={Styles.boxHorizontalSpace}>
          <View style={Styles.boxHorizontalCenter}>
            <Text style={Styles.textPriceRs}>R$</Text>
            <Text style={Styles.textPrice}>{product?.preco}</Text>
          </View>
          <TouchableOpacity 
            style={Styles.buttonCard} 
            onPress={() => navigation.navigate("Perfil-Usuario")} 
          >
            <Ionicons name="cart-outline" size={18} color="#FF90C8" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;
