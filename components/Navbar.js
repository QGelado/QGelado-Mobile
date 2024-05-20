import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import EditarPerfilUsuario from '../pages/EditarPerfilUsuario';
import PerfilUsuario from '../pages/PerfilUsuario';
import VisualizaTodosPedidos from '../pages/VisualizaTodosPedidos';
import TodosOsProdutos from '../pages/TodosOsProdutos';
import Home from '../pages/Home';
import Sorvete from '../pages/Sorvete';
import Carrinho from '../pages/Carrinho';
import VisualizaUmPedido from '../pages/VisualizaUmPedido';
import OurStatusBarLeft from './OurStatusBarLeft';
import OurStatusBarRight from './OurStatusBarRight';
import MontarSorvete from '../pages/MontarSorvete';
import MontarSorveteAcompanhamento from '../pages/MontarSorveteAcompanhamento';
import MontarSorveteFinalizado from '../pages/MontarSorveteFinalizado';


const Tab = createBottomTabNavigator();

const Navbar = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      >

      <Tab.Screen
        name="Visualizar-Pedidos"
        component={() => <VisualizaTodosPedidos navigation={props.navigation} />}
        options={(props) => ({
        headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
        tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Perfil',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
          tabBarButton: () => null,
          tabBarVisible: false
        })}
      />
        
      <Tab.Screen
        name="Home"
        component={Home}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            if(focused){
              return (
                  <Ionicons name="home" size={size} color="#FF40A0" />
                );
              }else{
                return (
                  <Ionicons name="home-outline" size={size} color="#FF40A0" />
              )
            }
          },
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
        })}
      />


      <Tab.Screen
          name="Visualizar-Todos-Produtos"
          component={() => <TodosOsProdutos /> }
          options={(props) => ({
            headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
            headerLeft: () => <OurStatusBarLeft />,
            headerTitle: () => {},
            headerStyle: { backgroundColor: '#E5F8FF' },
            headerTintColor: '#fff',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/footer/footer-perfil-icon.png')}
                />
              );
            },
            tabBarLabel: 'Visualizar Todos Produtos',
            tabBarLabel: 'Perfil',
            tabBarActiveTintColor: '#FF40A0',
            tabBarInactiveTintColor: '#000000',
            tabBarButton: () => null,
            tabBarVisible: false
          })}
      />

      <Tab.Screen
          name="Visualiza-Pedido"
          component={() => <VisualizaUmPedido /> }
          options={(props) => ({
            headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
            headerLeft: () => <OurStatusBarLeft />,
            headerTitle: () => {},
            headerStyle: { backgroundColor: '#E5F8FF' },
            headerTintColor: '#fff',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/footer/footer-perfil-icon.png')}
                />
              );
            },
            tabBarLabel: 'Visualizar Um Pedido',
            tabBarLabel: 'Perfil',
            tabBarActiveTintColor: '#FF40A0',
            tabBarInactiveTintColor: '#000000',
            tabBarButton: () => null,
            tabBarVisible: false
          })}
      />

      
      <Tab.Screen
        name="Perfil-Usuario"
        component={PerfilUsuario}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Perfil',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
        })}
      />

      <Tab.Screen
        name="Sorvete"
        component={Sorvete}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Sorvete',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
          tabBarButton: () => null,
          tabBarVisible: false
        })}
      />

      <Tab.Screen
        name="Montar-Sorvete"
        component={MontarSorvete}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Montar-Sorvete',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
          tabBarButton: () => null,
          tabBarVisible: false
        })}
      />
      <Tab.Screen
        name="Montar-Sorvete-Acompanhamento"
        component={MontarSorveteAcompanhamento}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Montar-Sorvete-Acompanhamento',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
          tabBarButton: () => null,
          tabBarVisible: false
        })}
      />
      <Tab.Screen
        name="Montar-Sorvete-Finalizado"
        component={MontarSorveteFinalizado}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Montar-Sorvete-Finalizado',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
          tabBarButton: () => null,
          tabBarVisible: false
        })}
      />

      <Tab.Screen
        name="Editar-Perfil"
        component={EditarPerfilUsuario}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-home-icon.png')}
              />
            );
          },
          tabBarLabel: 'Editar',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
        })}
      />

     <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={(props) => ({
          headerRight: () => <OurStatusBarRight navegacao={props.navigation} />,
          headerLeft: () => <OurStatusBarLeft />,
          headerTitle: () => {},
          headerStyle: { backgroundColor: '#E5F8FF' },
          headerTintColor: '#fff',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../assets/footer/footer-perfil-icon.png')}
              />
            );
          },
          tabBarLabel: 'Perfil',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
        })}
      />

    </Tab.Navigator>
  );
};

export default Navbar;
