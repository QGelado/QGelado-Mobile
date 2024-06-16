import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from '@react-navigation/native';
import CardHome from '../components/CardHome';
import CardLoading from '../components/CardLoading';
import * as SecureStore from 'expo-secure-store';
import route from '../BackendEndpoint'

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
    fetch(`${route}/sorvete-padrao`, {
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

      fetch(`${route}/usuario/${idRecuperado}`, {
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

const Styles = StyleSheet.create({
  App:{
    backgroundColor: '#E5F8FF',
    flexGrow: 1,
    padding:20,
  },
  Container: {
    flexGrow: 1,
    gap: 10,
    display: 'flex',
    paddingBottom: 10
  },
  bold: {
    fontFamily: 'poppins-bold',
  },
  boxVerticalCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  boxHorizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  titleHome: {
    color: '#380000',
    fontSize: 25,
    fontFamily: 'poppins-regular'
  },
  textHome: {
    color: '#380000',
    fontSize: 14,
    fontFamily: 'poppins-regular'
  },
  inputFilter: {
    backgroundColor: '#fff',
    fontFamily: 'poppins-regular',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#C4C4C4',
    width: '85%',
  },
  buttonSearch: {
    color: '#FF40A0',
    backgroundColor:'#FFC2E1',
    padding: 13,
    borderRadius: 100,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  textChip: {
    color: '#fff'
  },
  cardProduct: {
    backgroundColor:'#fff',
    borderRadius: 10,
    flexGrow: 1,
    width: '45%'
  },
  imgProduct: {
    backgroundColor:'#F4FCFF',
    borderRadius: 10,
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxMontaSorvete:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    width: '100%',
    height: 60,
    padding: 15,
    borderRadius: 20,
  },
  textMonteSorvete:{
    fontFamily: 'titan-one',
    color: '#fff',
    fontSize: 22,
  },
  imgMontaSorvete: {
    transform: [{rotate: '10deg'}]
  },
  linkMore: {
    width: '100%',
    textAlign: 'center',
    transform: [{rotate: '90deg'}],
    paddingLeft: 5,
    paddingRight: 30,
  },
  more: {
    fontFamily: 'titan-one',
    color: '#197CFF',
    fontSize: 40,
  }
})

