import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';



import Autenticacion from '../Screens/Autenticacion'
import PaginaPrincipal from '../Screens/PaginaPrincipal'
import Login from '../Screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import Prueba from '../Screens/Prueba'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
     
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName='pagina_principal'
    >


        <Stack.Screen 
           name="pagina_principal" 
           component={PaginaPrincipal} 
           options = {{ title: "FUNDACION MIA" }}
        />

        <Stack.Screen 
           name="inicio_session" 
           component={Login} 
           options = {{ title: "AUTENTICACION" }}
        />

        <Stack.Screen 
           name="auth" 
           component={Autenticacion} 
        />

        <Stack.Screen 
           name="prueba" 
           component={Prueba} 
        />

    </Stack.Navigator>

    </NavigationContainer>
  )
}

