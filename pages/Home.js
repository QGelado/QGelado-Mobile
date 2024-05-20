import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from '@react-navigation/native';
import CardHome from '../components/CardHome';
import CardLoading from '../components/CardLoading';
import * as SecureStore from 'expo-secure-store';

export default function Home() {
  const [filter, setFilter] = useState('')
  const [input, setInput] = useState('')
  const [sorvetes, setSorvetes] = useState([])
  const [user, setUser] = useState(null)

  const filterSorvetes = () => {
    setFilter(input)
  }

  const getSorvetes = () => {
    fetch(`https://6sncggx0-3000.brs.devtunnels.ms/sorvete-padrao`, {
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
      setSorvetes(json)
    })
    .catch((error) => {
      console.log("Erro getSorvetes Home", error);
      return null
    })
  }
  async function recuperaDadosUsuario(){
      const tokenRecuperado = await SecureStore.getItemAsync('token_usuario');
      const idRecuperado = await SecureStore.getItemAsync('id_usuario');
      console.log("User", idRecuperado);
      if(idRecuperado){
        fetch(`https://6sncggx0-3000.brs.devtunnels.ms/usuario/${idRecuperado}`, {
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
          console.log("User", idRecuperado, "Json", json);
          if(Object.keys(json).length == 0){
            setUser({nome: 'Usuário'});
          }else{
            setUser(json);
          }
          
        })
        .catch((error) => {
          console.log("Erro!:");
          console.log(error);
        });    

      }else{
        setUser({nome: 'Usuário'});
      }
  }

  
  useEffect(() => {
    recuperaDadosUsuario()
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
            <Text style={Styles.titleHome}>Olá, <Text style={Styles.bold}>{user?.nome?.split(" ")[0]}</Text></Text>
            <Text style={Styles.textHome}>Monte o seu sorvete e faça seu pedido</Text>
          </View>
        </View>
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
        <Link to={{screen: 'Montar-Sorvete'}} style={{width:'100%'}}>
          <LinearGradient colors={['#197CFF', '#C3EFFF']} style={Styles.boxMontaSorvete}
          start={{x:0,y:1}}
          end={{x:1,y:0}}>
            <Text style={Styles.textMonteSorvete}>
              Monte o seu sorvete!             
            </Text>
            <Image source={require('../assets/sorvetes.png')} 
              style={{...Styles.imgMontaSorvete, width:50, height: 80, objectFit: 'contain'}}/>
          </LinearGradient>
        </Link>
      
        <View style={{...Styles.boxHorizontalStart, flexWrap:'wrap',}}>
          {
            sorvetes.length === 0 && Array.from({length:4}).map(() => <CardLoading/>)
          }
          
          {
            sorvetes.length > 0 && 
            sorvetes
              ?.filter((product) => {
              if(filter == "" ||
              (filter !== "" && Object.keys(product).some((key) => typeof product?.[key] == 'string' && product?.[key]?.toLowerCase().includes(filter?.toLowerCase())))){
                return product
              }
            })?.slice(0,4).map((sorvete) => (
              <CardHome sorvete={sorvete} key={sorvete.id}/>
            ))
          }
        </View>
        <Link to={{screen: 'Visualizar-Todos-Produtos'}} style={Styles.linkMore}>
          <Text style={Styles.more}>{">"}</Text>
        </Link>
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
    justifyContent: 'flex-start',
    gap: 10,
    width: '90%',
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

