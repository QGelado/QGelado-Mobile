import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, Text, Image, ScrollView, Alert } from "react-native";
import Styles from "../style/MontarSorveteStyles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ItemSorvetePersonalizado from "../components/ItemSorvetePersonalizado";
import MaskedView from "@react-native-masked-view/masked-view";
import { useCartStore } from '../store/cartStore';
import routes from '../BackendEndpoint'

const MontarSorveteFinalizado = ({route}) => {
    const sorvete = route.params.payload
    const [cart, addToCart] = useCartStore((state) => [
        state.cart,
        state.addToCart
    ])
    const navigation = useNavigation()
    const [sorvetes, setSorvetes] = useState([sorvete])
    const [quantidade, setQuantidade] = useState(1)

    const maisSorvete = () => {
        setSorvetes([...sorvetes, sorvete])
        setQuantidade(quantidade + 1)
    }
    const menosSorvete = () => {
        if(sorvetes.length > 1){
            setSorvetes(currSorvetes => currSorvetes.slice(0, currSorvetes.length -1))
            setQuantidade(quantidade - 1)
        }
    }
    const totalPrice = (sorvete.recipiente?.preco + sorvete?.sabores.reduce((acc, val) => acc + val.preco, 0) + sorvete?.acompanhamentos.reduce((acc, val) => acc + val.preco, 0)) * quantidade

    const addCard = () =>{
        Alert.alert(`Seu sorvete foi adicionado ao carrinho!`)
        Array.from({length: quantidade}).forEach(()=>{
          addToCart(sorvete)
        })
        console.log(cart);
        setTimeout(() => {
            navigation.navigate("Home")
        }, 3000)
    }
  return (
    <View style={Styles.App}>
        <MaskedView
        maskElement={<Text style={[Styles.title, { textAlign:'left' } ]}>Meu Sorvete</Text>}
        >
        <LinearGradient
            colors={["#FF40A0", "#FF90C8"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{width: 250, height: 30, textAlign: 'left', marginBottom: 20}}
        />
        </MaskedView>
        <View style={Styles.boxSorveteFinalizado}>
            <View>
                <Text style={Styles.descriptionSorveteBold}>Sabores</Text>
                {
                    sorvete?.sabores?.map((sabor) => (
                    <View key={sabor?._id} style={Styles.boxHorizontalSpace}>
                        <Text style={Styles.descriptionSorvete}>{sabor?.sabor}</Text>
                        <Text style={Styles.descriptionSorvete}>{sabor?.preco?.toFixed(2).replace(".", ",")}</Text>
                    </View>
                    ))
                }
            </View>
            <View>
                <Text style={Styles.descriptionSorveteBold}>Recipiente</Text>
                <View style={Styles.boxHorizontalSpace}>
                    <Text style={Styles.descriptionSorvete}>{sorvete?.recipiente?.tipo}</Text>
                    <Text style={Styles.descriptionSorvete}>{sorvete?.recipiente?.preco?.toFixed(2).replace(".", ",")}</Text>
                </View>
            </View>

            <View>
                <Text style={Styles.descriptionSorveteBold}>Acompanhamentos</Text>
                {
                    sorvete?.acompanhamentos?.map((acompanhamento) => (
                    <View key={acompanhamento?._id} style={Styles.boxHorizontalSpace}>
                        <Text style={Styles.descriptionSorvete}>{acompanhamento?.nome}</Text>
                        <Text style={Styles.descriptionSorvete}>{acompanhamento?.preco?.toFixed(2).replace(".", ",")}</Text>
                    </View>
                    ))
                }
            </View>
            <ScrollView horizontal={true}>
                <View style={[Styles.boxHorizontalStart]}>
                    {
                        sorvete?.acompanhamentos?.map((acompanhamento) => (
                        <View key={acompanhamento?._id} style={[Styles.boxVerticalCenter, Styles.boxItemSorvete, { flexWrap: 'nowrap' }]}>
                            <Image
                            source={{
                                uri: `${routes}${acompanhamento?.imagem}`,
                            }}
                            style={{ width: 40, height: 40, objectFit: "contain" }}
                            />
                            <Text style={[Styles.textItems]}>{acompanhamento?.nome}</Text>
                        </View>
                        ))
                    }
                    {
                        sorvete?.sabores?.map((sabor) => (
                        <View key={sabor?._id} style={[Styles.boxVerticalCenter, Styles.boxItemSorvete, { flexWrap: 'nowrap' }]}>
                            <Image
                            source={{
                                uri: `${routes}${sabor?.imagem}`,
                            }}
                            style={{ width: 40, height: 40, objectFit: "contain" }}
                            />
                            <Text style={[Styles.textItems]}>{sabor?.sabor}</Text>
                        </View>
                        ))
                    }
                    <View style={[Styles.boxVerticalCenter, Styles.boxItemSorvete, { flexWrap: 'nowrap' }]}>
                        <Image
                            source={{
                                uri: `${routes}${sorvete?.recipiente?.imagem}`,
                            }}
                            style={{ width: 40, height: 40, objectFit: "contain" }}
                        />
                        <Text style={[Styles.textItems]}>{sorvete?.recipiente?.tipo}</Text>
                    </View>
                </View>
            </ScrollView>
            <LinearGradient
                colors={["#FF90C8", "#6AAAFF"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{width: '100%', height: 6, marginVertical: 15, borderRadius: 100}}
            />
            <View style={Styles.boxHorizontalSpace}>
                <LinearGradient colors={["#FFC2E1", "#FF90C8"]} style={[Styles.boxHorizontalCenter, Styles.btnQuantidade]} >
                    <TouchableOpacity onPress={menosSorvete}>
                        <Text style={Styles.textBtnLarge}> - </Text>
                    </TouchableOpacity>
                        <Text style={Styles.textBtnLarge}> {quantidade} </Text>
                    <TouchableOpacity onPress={maisSorvete}>
                        <Text style={Styles.textBtnLarge}> + </Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={[Styles.boxHorizontalCenter]}>
                    <Text style={Styles.textPriceRs}>R$</Text>
                    <Text style={Styles.textPrice}>
                    {totalPrice.toFixed(2).replace(".", ",")}
                    </Text>
                </View>
            </View>
            <View style={[Styles.boxHorizontalSpace]}>
                <TouchableOpacity onPress={() => navigation.navigate("Montar-Sorvete-Acompanhamento", {payload: sorvete})}
                >
                    <LinearGradient
                        colors={["#AFD1FF", "#6AAAFF"]}
                        style={[Styles.boxHorizontalCenter, Styles.btnRounded]}
                    >
                        <Text style={Styles.textBtns}>Voltar</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.boxHorizontalCenter,{flex: 1, justifyContent: 'flex-end'}]} onPress={addCard}>
                <LinearGradient
                    colors={["#FF90C8", "#FF40A0"]}
                    style={[Styles.boxHorizontalCenter, Styles.btnRounded]}
                >
                    <Text style={Styles.textBtns}>Adicionar ao carrinho</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default MontarSorveteFinalizado