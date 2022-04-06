import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';



import Autenticacion from '../Screens/Autenticacion'
import PaginaPrincipal from '../Screens/PaginaPrincipal'
import Login from '../Screens/Login'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
     
    <NavigationContainer >
    <Stack.Navigator
      initialRouteName='pagina_principal'
    >


        <Stack.Screen 
           name="pagina_principal" 
           component={PaginaPrincipal} 
           options = {{ title: "MI ALIMENTACIÓN MIA" }}
        />

        <Stack.Screen 
           name="inicio_session" 
           component={Login} 
           options = {{ title: "INICIO DE SESIÓN" }}
        />

        <Stack.Screen 
           name="auth" 
           component={Autenticacion} 
           options = {{ title: "Registro Beneficio" }}
        />

    </Stack.Navigator>

    </NavigationContainer>
  )
}

