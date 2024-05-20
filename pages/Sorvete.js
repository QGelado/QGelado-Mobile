import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import Styles from '../style/SorveteStyles'
import { Ionicons } from '@expo/vector-icons'
import ViewShot, { captureRef } from 'react-native-view-shot'
import * as Sharing from "expo-sharing";
import { LinearGradient } from 'expo-linear-gradient'
import { useCartStore } from '../store/cartStore'

const Sorvete = ({route}) => {
    const { id } = route.params
    const [sorvete, setSorvete] = useState({})
    const [quantidade, setQuantidade] = useState(1)
    const [cart, addToCart] = useCartStore((state) => [
      state.cart,
      state.addToCart
    ])
    const ref = useRef()
    const getSorvetes = () => {
      fetch(`https://6sncggx0-3000.brs.devtunnels.ms/sorvete-padrao/${id}`, {
        method: 'GET'
      })
      .then((response) => {
        const statusCode = response.status;
  
        if(statusCode == 200) {
          return response.json();
        }
  
        return Promise.reject(response);
      })
      .then(( json ) => {
        setSorvete(json)
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
        return null
      })
    }

    const shareSorvete = async () => {
      try{
        const uri = await captureRef(ref, {
          format: 'png',
          quality: 0.7
        })
        Sharing.shareAsync("file://" + uri, {dialogTitle: sorvete.nome});

      } catch(error){
        console.log(error);
      }
    };

    const maisSorvete = () => {
      setQuantidade(quantidade + 1)
    }
    const menosSorvete = () => {
      if(quantidade > 1){
        setQuantidade(quantidade - 1)
      }
    }

    const addCart = () =>{
      Alert.alert(`${sorvete?.nome} foi adicionado ao carrinho!`)
      Array.from({length: quantidade}).forEach(()=>{
        addToCart(sorvete)
      })
      console.log(cart);
    }

    useEffect(() => {
      getSorvetes()
    }, [id])
  return (
    <View style={Styles.App} ref={ref}>
      <View style={Styles.imgSorvete}>
        <Image 
          source={{
            uri: `https://6sncggx0-3000.brs.devtunnels.ms${sorvete?.imagem}`,
          }}
          style={{ width: 220, height: 220, objectFit: "contain" }}/>
      </View>
      <View style={[Styles.boxVerticalStart, Styles.infoSorvete]}>
        <Text style={Styles.titleSorvete}>
          {sorvete?.nome}
        </Text>
        <Text style={Styles.descriptionSorvete}>
          {sorvete?.descricao}
        </Text>
        <View style={[Styles.boxHorizontalSpace, {marginVertical: 10}]}>
          <View style={Styles.boxHorizontalCenter}>
            <Text style={Styles.textPriceRs}>R$</Text>
            <Text style={Styles.textPrice}>
              {sorvete?.preco?.toFixed(2)?.replace(".", ",").toString()}
            </Text>
          </View>
          <TouchableOpacity style={Styles.shareBtn} onPress={shareSorvete}>
            <Text style={Styles.shareText}>Compartilhar</Text> 
            <Ionicons name="share-social" color={"#6AAAFF"} size={20} />
          </TouchableOpacity>
        </View>
        <View style={[Styles.boxHorizontalSpace, { marginTop: 30 }]}>
          <LinearGradient colors={['#FFC2E1', '#FF90C8']} style={[Styles.boxHorizontalCenter, Styles.btnCart]} >
            <TouchableOpacity style={[Styles.boxHorizontalCenter]} onPress={addCart}>
              <Ionicons name='cart-outline' size={20} color={"#fff"}/>
              <Text style={Styles.textBtns}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#6AAAFF', '#197CFF']} style={[Styles.boxHorizontalCenter, Styles.btnQuantidade]} >
            <TouchableOpacity onPress={menosSorvete}>
              <Text style={Styles.textBtns}> - </Text>
            </TouchableOpacity>
            <Text style={Styles.textBtns}> {quantidade} </Text>
            <TouchableOpacity onPress={maisSorvete}>
              <Text style={Styles.textBtns}> + </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

export default Sorvete