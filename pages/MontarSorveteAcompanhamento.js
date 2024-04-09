import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import Styles from "../style/MontarSorveteStyles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ItemSorvetePersonalizado from "../components/ItemSorvetePersonalizado";
import MaskedView from "@react-native-masked-view/masked-view";

const MontarSorveteAcompanhamento = ({ route }) => {
  const { payload } = route.params;
  console.log("Payload", payload);
  const navigation = useNavigation();
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [selected, setSelected] = useState([]);
  const [sorvete, setSorvete] = useState(payload);
  const getAcompanhamentos = () => {
    fetch(`https://6sncggx0-3000.brs.devtunnels.ms/acompanhamento`, {
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
        if (payload?.acompanhamentos.length === 0) {
          setSorvete({ ...sorvete, acompanhamentos: [json[0]] });
          setSelected(["Acompanhamento", json[0]?._id]);
        } else {
          setSelected(["Acompanhamento", payload?.acompanhamentos?.[0]?._id]);
        }
        setAcompanhamentos(json);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  const onDelete = (tipo, id) => {
    setSorvete({
      ...sorvete,
      acompanhamentos: sorvete?.acompanhamentos?.filter(
        (item) => item.key !== id
      ),
    });
  };

  const addAcompanhamento = () => {
    let newKey = Math.floor(Math.random() * 1000);

    while (
      sorvete.acompanhamentos?.some((sab) => sab.key?.split(".")[1] === newKey)
    ) {
      newKey = Math.floor(Math.random() * 1000);
    }

    const acompanhamento = {
      ...acompanhamentos[0],
      key: acompanhamentos[0]?._id + "." + newKey,
    };
    const acompanhamentosJson = [...sorvete.acompanhamentos, acompanhamento];
    setSorvete({ ...sorvete, acompanhamentos: acompanhamentosJson });
  };

  const onSelect = (tipo, id) => {
    setSelected([tipo, id]);
  };

  const totalPrice =
    sorvete.recipiente?.preco +
    sorvete?.sabores.reduce((acc, val) => acc + val.preco, 0) +
    sorvete?.acompanhamentos.reduce((acc, val) => acc + val.preco, 0);

  useEffect(() => {
    getAcompanhamentos();
  }, []);
  return (
    <View style={Styles.App}>
      <MaskedView
        maskElement={<Text style={Styles.title}>Montar Sorvete</Text>}
      >
        <LinearGradient
          colors={["#FF40A0", "#FF90C8"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: 250,
            height: 30,
            textAlign: "center",
            marginBottom: 20,
          }}
        />
      </MaskedView>

      <View style={[Styles.boxItems, {height: "45%"}]}>
        <TouchableOpacity onPress={addAcompanhamento}>
          <LinearGradient
            colors={["#FF40A0", "#FFC2E1"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={Styles.btnRoundedSm}
          >
            <Text style={Styles.textBtnLarge}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
        <ScrollView style={{ paddingVertical: 10, height: "auto" }}>
          <View style={[Styles.boxVerticalCenter, { gap: 10, height: "auto" }]}>
            {sorvete?.acompanhamentos?.map((acompanhamento) => (
              <ItemSorvetePersonalizado
                item={acompanhamento}
                key={acompanhamento?.key}
                selected={selected[1] === acompanhamento.key}
                onDelete={onDelete}
                onSelect={onSelect}
                tipo={"Acompanhamento"}
                length={sorvete?.acompanhamentos?.length + 1}
              />
            ))}
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
          <Text style={Styles.textBtns}>Escolher Acompanhamentos</Text>
        </LinearGradient>
        <View style={Styles.boxEscolher}>
          {acompanhamentos?.map((acompanhamento) => {
            const isSelected = selected[1] === acompanhamento._id;
            return (
              <View key={acompanhamento?._id} style={Styles.boxItem}>
                <Image
                  source={{
                    uri: `https://6sncggx0-3000.brs.devtunnels.ms/acompanhamento/image/${acompanhamento?.imagem}`,
                  }}
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
                <Text
                  style={[
                    Styles.textItems,
                    { textDecorationLine: isSelected ? "underline" : "none" },
                  ]}
                >
                  {acompanhamento?.nome}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={[Styles.boxHorizontalStart]}>
        {sorvete?.sabores?.map((sabor) => (
          <View
            key={sabor?._id}
            style={[
              Styles.boxVerticalCenter,
              Styles.boxItemSorvete,
              { flexWrap: "nowrap" },
            ]}
          >
            <Image
              source={{
                uri: `https://6sncggx0-3000.brs.devtunnels.ms/sabor-sorvete/image/${sabor?.imagem}`,
              }}
              style={{ width: 40, height: 40, objectFit: "contain" }}
            />
            <Text style={[Styles.textItems]}>{sabor?.sabor}</Text>
          </View>
        ))}
        <View
          style={[
            Styles.boxVerticalCenter,
            Styles.boxItemSorvete,
            { flexWrap: "nowrap" },
          ]}
        >
          <Image
            source={{
              uri: `https://6sncggx0-3000.brs.devtunnels.ms/recipiente/image/${sorvete?.recipiente?.imagem}`,
            }}
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          <Text style={[Styles.textItems]}>{sorvete?.recipiente?.tipo}</Text>
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Montar-Sorvete", { payload: sorvete })
            }
          >
            <LinearGradient
              colors={["#AFD1FF", "#6AAAFF"]}
              style={[Styles.boxHorizontalCenter, Styles.btnRounded]}
            >
              <Text style={Styles.textBtns}>Voltar para o sorvete</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.boxHorizontalCenter]}
            onPress={() =>
              navigation.navigate("Montar-Sorvete-Finalizado", {
                payload: sorvete,
              })
            }
          >
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

export default MontarSorveteAcompanhamento;
