import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

import EditarPerfilUsuario from "../pages/EditarPerfilUsuario";
import PerfilUsuario from "../pages/PerfilUsuario";
import ExcluirUsuario from "../pages/ExcluirUsuario";
import VisualizaTodosPedidos from "../pages/VisualizaTodosPedidos";
import TodosOsProdutos from "../pages/TodosOsProdutos";
import Home from "../pages/Home";
import Sorvete from "../pages/Sorvete";
import Carrinho from "../pages/Carrinho";
import VisualizaUmPedido from "../pages/VisualizaUmPedido";
import OurStatusBarLeft from "./OurStatusBarLeft";
import OurStatusBarRight from "./OurStatusBarRight";
import MontarSorvete from "../pages/MontarSorvete";
import MontarSorveteAcompanhamento from "../pages/MontarSorveteAcompanhamento";
import MontarSorveteFinalizado from "../pages/MontarSorveteFinalizado";

const Tab = createBottomTabNavigator();

const Navbar = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            } else {
              return (
                <Ionicons name="home-outline" size={size} color={color} />
              );
            }
          },
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#FF40A0",
          tabBarInactiveTintColor: "#FF40A0",
        })}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return <Ionicons name="cart" size={size} color={color} />;
            } else {
              return (
                <AntDesign name="shoppingcart" size={size} color={color} />
              );
            }
          },
          tabBarLabel: "Carrinho",
          tabBarActiveTintColor: "#FF40A0",
          tabBarInactiveTintColor: "#FF40A0",
        })}
      />
      <Tab.Screen
        name="Visualizar-Pedidos"
        component={() => (
          <VisualizaTodosPedidos navigation={props.navigation} />
        )}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarIcon: ({ size, focused, color }) => {
            if(focused){
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../assets/footer/footer-perfil-icon.png")}
                />
              );
            }else{
              return <MaterialIcons name="list-alt" size={size} color={color} />
            }
          },
          tabBarLabel: "Pedidos",
          tabBarActiveTintColor: "#FF40A0",
          tabBarInactiveTintColor: "#FF40A0",
        })}
      />

      <Tab.Screen
        name="Visualizar-Todos-Produtos"
        component={() => <TodosOsProdutos />}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Visualizar Todos Produtos",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />

      <Tab.Screen
        name="Visualiza-Pedido"
        component={() => <VisualizaUmPedido />}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Visualizar Um Pedido",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />

      <Tab.Screen
        name="Perfil-Usuario"
        component={() => <PerfilUsuario navigation={props.navigation}/>}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Perfil",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />

      <Tab.Screen
        name="Sorvete"
        component={Sorvete}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Sorvete",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />

      <Tab.Screen
        name="Montar-Sorvete"
        component={MontarSorvete}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Montar-Sorvete",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="Montar-Sorvete-Acompanhamento"
        component={MontarSorveteAcompanhamento}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Montar-Sorvete-Acompanhamento",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="Montar-Sorvete-Finalizado"
        component={MontarSorveteFinalizado}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Montar-Sorvete-Finalizado",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />

      <Tab.Screen
        name="Editar-Perfil"
        component={() => <EditarPerfilUsuario navigation={props.navigation} />}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Editar",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />

      <Tab.Screen
        name="Excluir-Usuario"
        component={() => <ExcluirUsuario />}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: "#E5F8FF" },
          headerTintColor: "#fff",
          tabBarLabel: "Excluir",
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      
    </Tab.Navigator>
  );
};

export default Navbar;
