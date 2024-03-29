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

import EditarPerfilUsuario from '../pages/EditarPerfilUsuario';
import PerfilUsuario from '../pages/PerfilUsuario';
import VisualizaTodosPedidos from '../pages/VisualizaTodosPedidos';
import VisualizaUmPedido from '../pages/VisualizaUmPedido';
import OurStatusBarLeft from './OurStatusBarLeft';
import OurStatusBarRight from './OurStatusBarRight';

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
          tabBarButton: () => null,
          tabBarVisible: false
        })}
      />

      <Tab.Screen
          name="Visualiza-Pedido"
          component={VisualizaUmPedido}
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
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#FF40A0',
          tabBarInactiveTintColor: '#000000',
        })}
      />
      
    </Tab.Navigator>
  );
};

export default Navbar;
