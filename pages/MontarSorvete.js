import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../style/MontarSorveteStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ItemSorvetePersonalizado from "../components/ItemSorvetePersonalizado";
import MaskedView from "@react-native-masked-view/masked-view";
import routes from '../BackendEndpoint'

const MontarSorvete = ({route}) => {
  const payload = route?.params?.payload
  const [sabores, setSabores] = useState([]);
  const [recipientes, setRecipientes] = useState([]);
  const [selected, setSelected] = useState([]);
  const [sorvete, setSorvete] = useState(payload ? payload : {
    sabores: [],
    recipiente: {},
    acompanhamentos: []
  });
  const navigation = useNavigation()
  const getSabores = () => {
    fetch(`${routes}/sabor-sorvete`, {
      method: "GET",
    })
      .then((response) => {
        const statusCode = response.status;

        if (statusCode == 200) {
          return response.json();
        }

        return Promise.reject(response);
      })
      .then((json) => {
        let newKey = Math.floor(Math.random() * 1000)

        while(sorvete.sabores?.some(sab => sab.key?.split('.')[1] === newKey)){
          newKey = Math.floor(Math.random() * 1000)
        }

        const sabor = {
          ...json[0],
          key: json[0]?._id + "." + newKey
        }
        const saboresJson = [...sorvete.sabores, sabor];
        if(!payload && sorvete.sabores.length === 0){
          setSorvete({ ...sorvete, sabores: saboresJson });
        }
        setSabores(json);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };
  const getRecipientes = () => {
    fetch(`${routes}/recipiente`, {
      method: "GET",
    })
      .then((response) => {
        const statusCode = response.status;

        if (statusCode == 200) {
          return response.json();
        }

        return Promise.reject(response);
      })
      .then((json) => {
        if(!payload){
          setSorvete({ ...sorvete, recipiente: json[0] });
          console.log(json[0]);
          setSelected(["Recipiente", json[0]?._id]);
        }else{
          setSelected(["Recipiente", payload.recipiente?._id]);
          
        }
        console.log("Recipientes", json);
        setRecipientes(json);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  const onDelete = (tipo, id) => {
    const type = tipo === 'Sabor' ? 'sabores' : tipo === 'Recipiente' ? 'recipiente' : 'Acompanhamentos'
    setSorvete({
      ...sorvete,
      [type]: sorvete[type]?.filter((item) => item.key !== id),
    });
  };

  const changeSabor = (sabor) => {
    let newKey = Math.floor(Math.random() * 1000)

    while(sorvete.sabores?.some(sab => sab.key?.split('.')[1] === newKey)){
      newKey = Math.floor(Math.random() * 1000)
    }
    const newSabor = {
      ...sabor,
      key: sabor?._id + "." + newKey
    }

    const newSabores = sorvete?.sabores?.map((sab) => {
      if(sab?.key === selected[1]){
        return newSabor
      } else {
        return sab
      }
    })
    setSelected(["Sabor", newSabor.key])
    setSorvete({...sorvete, sabores: newSabores})
  }

  const changeRecipiente = (recipiente) => {
    setSorvete({...sorvete, recipiente: recipiente})
  }

  const addSabor = () =>{
    let newKey = Math.floor(Math.random() * 1000)

    while(sorvete.sabores?.some(sab => sab.key?.split('.')[1] === newKey)){
      newKey = Math.floor(Math.random() * 1000)
    }

    const sabor = {
      ...sabores[0],
      key: sabores[0]?._id + "." + newKey
    }
    const saboresJson = [...sorvete.sabores, sabor];
    setSorvete({...sorvete, sabores: saboresJson})
  }

  const onSelect = (tipo, id) => {
    setSelected([tipo, id]);
  };

  const totalPrice = sorvete.recipiente?.preco + sorvete?.sabores.reduce((acc, val) => acc + val.preco, 0) + sorvete?.acompanhamentos.reduce((acc, val) => acc + val.preco, 0)

  useEffect(() => {
    getSabores();
    getRecipientes();
  }, []);
  return (
    <ScrollView style={{paddingBottom: 10}}>
      <View style={Styles.App}>
        <MaskedView
          maskElement={<Text style={Styles.title}>Montar Sorvete</Text>}
        >
          <LinearGradient
              colors={["#FF40A0", "#FF90C8"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{width: 250, height: 30, textAlign: 'center', marginBottom: 20}}
          />
        </MaskedView>
        
        <View style={[Styles.boxItems]}>
          <TouchableOpacity onPress={addSabor}>
            <LinearGradient
              colors={["#FF40A0", "#FFC2E1"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={Styles.btnRoundedSm}
            >
              <Text style={Styles.textBtnLarge}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
          <ScrollView style={{paddingVertical: 10, height: 'auto'}}>
            <View style={[Styles.boxVerticalCenter, {gap: 10, height: 'auto'}]}>
              {sorvete?.sabores?.map((sabor) => (
                <ItemSorvetePersonalizado
                  item={sabor}
                  key={sabor?.key}
                  selected={selected[1] === sabor.key}
                  onDelete={onDelete}
                  onSelect={onSelect}
                  tipo={"Sabor"}
                  length={sorvete?.sabores?.length}
                  />
                ))}
              <ItemSorvetePersonalizado
                item={sorvete?.recipiente}
                key={sorvete?.recipiente?._id}
                selected={selected[1] === sorvete?.recipiente?._id}
                onSelect={onSelect}
                onDelete={() => console.log('Não é possivel apagar o recipiente')}
                tipo={"Recipiente"}
                length={1}
              />
            </View>
          </ScrollView>
        </View>
        <View style={Styles.boxVerticalCenter}>
          <LinearGradient
            colors={["#197CFF", "#C3EFFF"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[Styles.btnRoundedSm, { marginBottom: -10, zIndex: 10 }]}
          >
            <Text style={Styles.textBtns}>Escolher {selected[0]}</Text>
          </LinearGradient>
          <View style={Styles.boxEscolher}>
            {
              selected[0] === "Sabor" ? 
              sabores?.map((sabor) => {
                const isSelected = selected[1].split(".")[0] === sabor._id
                return (
                  <TouchableOpacity key={sabor?._id} style={Styles.boxItem} onPress={() => changeSabor(sabor)}>
                    <Image
                      source={{
                        uri: `${routes}${sabor?.imagem}`,
                      }}
                      style={{ width: 50, height: 50, objectFit: "contain" }}
                    />
                    <Text style={[Styles.textItems, {textDecorationLine: isSelected ? 'underline' : 'none'}]}>{sabor?.sabor}</Text>
                  </TouchableOpacity>
                );
              }) :
              selected[0] === "Recipiente" ? 
              recipientes?.map((recipiente) => {
                const isSelected = selected[1] === recipiente._id
                return (
                  <TouchableOpacity key={recipiente?._id} style={Styles.boxItem} onPress={() => changeRecipiente(recipiente)}>
                    <Image
                      source={{
                        uri: `${routes}${recipiente?.imagem}`,
                      }}
                      style={{ width: 50, height: 50, objectFit: "contain" }}
                    />
                    <Text style={[Styles.textItems, {textDecorationLine: isSelected ? 'underline' : 'none'}]}>{recipiente?.tipo}</Text>
                  </TouchableOpacity>
                );
              }) : null
            }
          </View>
        </View>
        <View
          style={[
            Styles.boxHorizontalSpace,
            { alignItems: "flex-end", paddingHorizontal: 20 },
          ]}
        >
          <View style={[Styles.boxHorizontalCenter, { width: "30%" }]}>
            <Text style={Styles.textPriceRs}>R$</Text>
            <Text style={Styles.textPrice}>
              {totalPrice.toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <View style={[Styles.boxVerticalEnd, { width: "70%" }]}>
            <TouchableOpacity onPress={() => navigation.navigate("Montar-Sorvete-Acompanhamento", {payload: sorvete})}>
              <LinearGradient
                colors={["#AFD1FF", "#6AAAFF"]}
                style={[Styles.boxHorizontalCenter, Styles.btnRounded]}
              >
                <Text style={Styles.textBtns}>Escolher acompanhamento</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.boxHorizontalCenter]} onPress={() => navigation.navigate("Montar-Sorvete-Finalizado", {payload: sorvete})}>
              <LinearGradient
                colors={["#FF90C8", "#FF40A0"]}
                style={[Styles.boxHorizontalCenter, Styles.btnRounded]}
              >
                <Text style={Styles.textBtns}>Finalizar Sorvete</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MontarSorvete;
