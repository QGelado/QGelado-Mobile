import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Styles from '../style/HomeStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from '@react-navigation/native';
import CardHome from '../components/CardHome';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import CardLoading from '../components/CardLoading';

export default function Home() {
  const [filter, setFilter] = useState({
    text: '',
    tag: 'Todos'
  })
  const tags = ['Todos', 'Sorvete de Massa', 'Picolé']
  const [sorvetes, setSorvetes] = useState([])
  const user = {
    nome: 'Diogo'
  }

  const getSorvetes = () => {
    fetch(`https://6sncggx0-3000.brs.devtunnels.ms/sorvete-padrao`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(( json ) => {
      setSorvetes(json)
    })
    .catch((error) => {
      console.log(error);
      return null
    })
  }

  useEffect(() => {
    getSorvetes()
  }, [])

  return (
    <ScrollView style={Styles.App}>
      <SafeAreaView style={Styles.Container}>
        <View style={Styles.boxHorizontalStart}>
          <Image 
            source={require('../assets/logo/logo-qgelado.png')} 
            style={{width: 70, height: 70, objectFit: 'contain'}}
          />
          <View>
            <Text style={Styles.titleHome}>Olá, <Text style={Styles.bold}>{user?.nome}</Text></Text>
            <Text style={Styles.textHome}>Monte o seu sorvete e faça seu pedido</Text>
          </View>
        </View>
        <View style={Styles.boxHorizontalStart}>
          <TextInput 
            style={Styles.inputFilter} 
            placeholder="Pesquise o seu sabor favorito"
            onChangeText={(text) => setFilter({...filter, text: text})}
          />
          <TouchableOpacity style={Styles.buttonSearch}>
            <Ionicons name="search" size={18} color="#FF40A0" />
          </TouchableOpacity>
        </View>
        <View style={Styles.boxHorizontalStart}>
        {tags?.map((tag) => (
          <TouchableOpacity style={{...Styles.chip, backgroundColor: filter?.tag === tag ? '#FF40A0' : '#FF90C8'}} onPress={() => setFilter({...filter, tag: tag})}>
            <Text style={Styles.textChip}>
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
        </View>
        <Link to={{screen: 'Perfil-Usuario'}} style={{width:'100%'}}>
          <LinearGradient colors={['#197CFF', '#C3EFFF']} style={Styles.boxMontaSorvete}>
            <Text style={Styles.textMonteSorvete}>
              Monte o seu sorvete!             
            </Text>
            <Image source={require('../assets/sorvetes.png')} 
              style={{...Styles.imgMontaSorvete, width:70, height: 80, objectFit: 'contain'}}/>
          </LinearGradient>
        </Link>
      
        <View style={{...Styles.boxHorizontalStart, flexWrap:'wrap',}}>
          <CardLoading/>
          {sorvetes && sorvetes.filter((product) => {
            if(filter?.text == "" ||
              Object.keys(product).some((key) => typeof product?.[key] == 'string' && product?.[key]?.toLowerCase().includes(filter?.text.toLowerCase()))){
              return product
            }
          })?.slice(0,4).map((product) => (
            <CardHome product={product} key={product.id}/>
          ))}
        </View>
        <Link to={{screen: 'Perfil-Usuario'}} style={Styles.linkMore}>
          <Text style={Styles.more}>{">"}</Text>
        </Link>
      </SafeAreaView>
    </ScrollView>
  );
}

