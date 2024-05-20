import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Styles from '../style/ItemSorvetePersonalizadoStyles'

const ItemSorvetePersonalizado = ({item, tipo, selected, onDelete, onSelect, length}) => {
    const url = tipo === 'Sabor' ? 'sabor-sorvete' : tipo === 'Recipiente' ? 'recipiente' : 'acompanhamento'
  return (
    <View style={[Styles.boxHorizontalCenter, { width: 'auto', margin: '0 auto'}]}>
        <Text style={[Styles.priceText, {width: 70}]}>R${item?.preco?.toFixed(2).replace(".", ",")}</Text>
        <View style={[Styles.boxVerticalCenter, {width: 'auto'}]}>
            <LinearGradient
                colors={["#FF40A0", "#FFC2E1"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={Styles.btnRoundedSm}
            >
                <Text style={Styles.textBtnLarge}>{tipo}</Text>
            </LinearGradient>
            <LinearGradient colors={selected ? ["#FF90C8", "#6AAAFF"] : ["#fff", "#fff"]} style={[Styles.gradient]}>
                <TouchableOpacity style={[Styles.boxVerticalCenter, Styles.boxSorvete, {flexWrap: 'nowrap'}]} onPress={() => {
                    tipo === 'Recipiente' ? onSelect(tipo, item?._id) : onSelect(tipo, item?.key)
                    }}>
                    <Image
                        source={{
                            uri: `https://6sncggx0-3000.brs.devtunnels.ms${item?.imagem}`,
                        }}
                        style={{ width: '100%', height: 50, objectFit: "contain" }}
                        />
                    <Text style={Styles.textItems}>{item?.sabor ? item?.sabor : tipo === "Recipiente" ? item?.tipo : item?.nome}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        <View style={{width: 70, margin: '0 auto'}}>
            <TouchableOpacity style={[Styles.buttonCard]} onPress={() => {
                length <= 1 ? console.log('É preciso te no minimo um sabor') : onDelete(tipo, item?.key)
                
                }}>
                <Ionicons name="trash" size={20} color={tipo === 'Recipiente' || length <= 1 ? '#E5F8FF' : '#0D70F2'}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ItemSorvetePersonalizado