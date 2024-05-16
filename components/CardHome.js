import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../style/CardStyles";
import { Ionicons } from "@expo/vector-icons";


const CardHome = ({ sorvete }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[Styles.boxVerticalCenter, Styles.cardProduct]}
      onPress={() => navigation.navigate("Sorvete", {id: sorvete?.id})}
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
        <Text style={Styles.titleCard}>{sorvete?.nome?.length > 13 ? sorvete?.nome.slice(0, 13) + "..." : sorvete?.nome}</Text>
        <Text style={Styles.descriptionCard}>
          {sorvete?.marca ? sorvete?.descricao?.slice(0, 20) + "..." : sorvete?.sabor}
        </Text>
        <View style={Styles.boxHorizontalSpace}>
          <View style={Styles.boxHorizontalCenter}>
            <Text style={Styles.textPriceRs}>R$</Text>
            <Text style={Styles.textPrice}>{sorvete?.preco}</Text>
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
