import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Styles from "../style/MontarSorveteStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ItemSorvetePersonalizado from "../components/ItemSorvetePersonalizado";

const MontarSorvete = () => {
  const [price, setPrice] = useState(0);
  const [sabores, setSabores] = useState([]);
  const [recipientes, setRecipientes] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [sorvete, setSorvete] = useState({})
  const getSabores = () => {
    fetch(`https://6sncggx0-3000.brs.devtunnels.ms/sabor-sorvete`, {
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
        setSorvete({...sorvete, sabores: [json[0]]})
        setSabores(json);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };
  const getRecipientes = () => {
    fetch(`https://6sncggx0-3000.brs.devtunnels.ms/recipiente`, {
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
        setSorvete({...sorvete, recipiente: json[0]})
        setRecipientes(json);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  useEffect(() => {
    getSabores();
    getRecipientes();
  }, []);
  return (
    <View style={Styles.App}>
      <Text>Montar Sorvete</Text>
      <View style={[Styles.boxItems]}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FF40A0", "#FFC2E1"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={Styles.btnRoundedSm}
          >
            <Text style={Styles.textBtnLarge}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
        {
            sorvete?.sabores?.map((sabor) => (
                <ItemSorvetePersonalizado item={sabor} key={sabor?._id} selected={true}/>
            ))
        }
        <ItemSorvetePersonalizado item={sorvete?.recipiente} key={sorvete?.recipiente?._id} selected={false}/>
      </View>
      <View style={Styles.boxVerticalCenter}>
        <LinearGradient
          colors={["#197CFF", "#C3EFFF"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[Styles.btnRoundedSm, { marginBottom: -10, zIndex: 10 }]}
        >
          <Text style={Styles.textBtns}>Escolher sabor</Text>
        </LinearGradient>
        <View style={Styles.boxEscolher}>
          {sabores?.map((sabor) => {
            return (
              <View key={sabor?._id} style={Styles.boxItem}>
                <Image
                  source={{
                    uri: `https://6sncggx0-3000.brs.devtunnels.ms/sabor-sorvete/image/${sabor?.imagem}`,
                  }}
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
                <Text style={Styles.textItems}>{sabor?.sabor}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={[
          Styles.boxHorizontalSpace,
          { alignItems: "flex-end", paddingHorizontal: 20 },
        ]}
      >
        <View style={[Styles.boxHorizontalCenter, { width: "20%" }]}>
          <Text style={Styles.textPriceRs}>R$</Text>
          <Text style={Styles.textPrice}>
            {price.toFixed(2).replace(".", ",")}
          </Text>
        </View>
        <View style={[Styles.boxVerticalEnd, { width: "80%" }]}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#AFD1FF", "#6AAAFF"]}
              style={[Styles.boxHorizontalCenter, Styles.btnRounded]}
            >
              <Text style={Styles.textBtns}>Escolher acompanhamento</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.boxHorizontalCenter]}>
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
  );
};

export default MontarSorvete;
