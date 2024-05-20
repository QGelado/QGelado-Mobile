import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Styles from '../style/HomeStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from '@react-navigation/native';
import CardHome from '../components/CardHome';
import CardLoading from '../components/CardLoading';
import * as SecureStore from 'expo-secure-store';

export default function Home() {
  const [filter, setFilter] = useState({
    text: '',
    tag: 'Todos'
  })
  const [input, setInput] = useState('')
  const tags = ['Todos', 'Sorvete de Massa', 'Picolé']
  const [sorvetes, setSorvetes] = useState([])
  const [user, setUser] = useState(null)

  const filterSorvetes = () => {
    setFilter({...filter, text: input})
  }

  const getSorvetes = () => {
    fetch(`https://r7b6tzdg-3000.brs.devtunnels.ms/sorvete-padrao`, {
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
  async function recuperaDadosUsuario(){
      const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
      const idRecuperado = await SecureStore.getItemAsync('id_usuario');

      fetch(`https://r7b6tzdg-3000.brs.devtunnels.ms/usuario/${idRecuperado}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenRecuperado}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) =>{ 
        const statusCode = response.status;

        if(statusCode == 200) {
          return response.json();
        }

        setUser({nome: 'Usuário'});
        return Promise.reject(response);
      })
      .then((json) => {

        if(json.length == 0){
          setUser({nome: 'Usuário'});
        }else{
          setUser(json);
        }
        
      })
      .catch((error) => {
        console.log("Erro!:");
        console.log(error);
        setPedidosData("Você ainda não tem pedidos!");
      });    
  }

  
  useEffect(() => {
    recuperaDadosUsuario()
    getSorvetes()
  }, [])

  return (
    <ScrollView style={Styles.App}>
      <SafeAreaView style={Styles.Container}>
     
        <View style={Styles.boxHorizontalStart}>
          <TextInput 
            style={Styles.inputFilter} 
            placeholder="Pesquise o seu sabor favorito"
            placeholderTextColor={'#C4C4C4'}
            onChangeText={text => {
              setInput(text)
            }}
          />
          <TouchableOpacity style={Styles.buttonSearch} onPress={filterSorvetes}>
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
      
        <View style={{...Styles.boxHorizontalStart, flexWrap:'wrap',}}>
          {
            sorvetes.length === 0 && Array.from({length:4}).map(() => <CardLoading/>)
          }
          
          {
            sorvetes.length > 0 && sorvetes?.filter((product) => {
              if(filter?.text == "" ||
                Object.keys(product).some((key) => typeof product?.[key] == 'string' && product?.[key]?.toLowerCase().includes(filter?.text.toLowerCase()))){
                return product
              }
            })?.slice(0,4).map((sorvete) => (
              <CardHome sorvete={sorvete} key={sorvete.id}/>
            ))
          }
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

