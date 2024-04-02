import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Styles from '../style/SorveteStyles'

const Sorvete = ({route}) => {
    const { id } = route.params
    const [sorvete, setSorvete] = useState({})
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
    <View>
      <View>
        <Image 
          source={{
            uri: `https://6sncggx0-3000.brs.devtunnels.ms${sorvete?.imagem}`,
          }}
          style={{ width: 50, height: 60, objectFit: "contain" }}/>
      </View>
      <View>
        <Text>
          {sorvete?.nome}
        </Text>
        <Text>
          {sorvete?.descricao}
        </Text>
        <View>
        <View style={Styles.boxHorizontalCenter}>
            <Text style={Styles.textPriceRs}>R$</Text>
            <Text style={Styles.textPrice}>{sorvete?.preco}</Text>
          </View>
          <TouchableOpacity>
            <Text>Compartilhar</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxHorizontalCenter}>
          <TouchableOpacity>
            <Text>Adicionar ao carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>- 1 +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Sorvete