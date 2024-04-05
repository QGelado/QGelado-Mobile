import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Styles from '../style/ItemSorvetePersonalizadoStyles'

const ItemSorvetePersonalizado = ({item, selected}) => {
  return (
    <View style={[Styles.boxHorizontalCenter, { width: '80%', margin: '0 auto'}]}>
        <Text style={Styles.priceText}>R${item?.preco?.toFixed(2).replace(".", ",")}</Text>
        <LinearGradient colors={selected ? ["#FF90C8", "#6AAAFF"] : ["#fff", "#fff"]} style={Styles.gradient}>
            <View style={[Styles.boxVerticalCenter, Styles.boxSorvete]}>
                <Image
                    source={{
                        uri: `https://6sncggx0-3000.brs.devtunnels.ms/sabor-sorvete/image/${item?.imagem}`,
                    }}
                    style={{ width: 50, height: 50, objectFit: "contain" }}
                    />
                <Text style={Styles.textItems}>{item?.sabor ? item?.sabor : item?.tipo}</Text>
            </View>
        </LinearGradient>
        <TouchableOpacity style={Styles.buttonCard}>
            <Ionicons name="trash" size={20} color={"#E5F8FF"}/>
        </TouchableOpacity>
    </View>
  )
}

export default ItemSorvetePersonalizado