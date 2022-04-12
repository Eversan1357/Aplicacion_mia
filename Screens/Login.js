import axios from 'axios'
import React, { useState, useContext, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  loginValidationSchema
} from 'react-native';

class Login extends Component {


  state = {}
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    };
    axios.post('http://localhost:8080/api/auth/iniciarSesion', data)
      .then(res => {
        localStorage.setItem('tokeDeAcceso', res.data.tokeDeAcceso);
        this.setState({
          loggedIn: true
        })
      })
      .catch(
        err => {
          console.log(err);
        })
  };


  render() {

    if(this.state.loggedIn){
      return <Navigate to={'auth'} />
    }

    return (
      <View style={{
        backgroundColor: "#FF3939",
        height: "100%",
        width: "100%"
      }}>
        <View style={{
          backgroundColor: "white",
          margin: 30,
          marginTop: 100,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,
          elevation: 24,
        }}>

          <Text style={{
            color: "black",
            fontSize: 25,
            marginTop: 50,
            textAlign: 'center',
          }}>Bienvenido</Text>

          <Text style={{
            color: "black",
            fontSize: 20,
            marginTop: 30,
            textAlign: 'center',
          }}>Fundación Mía</Text>

          <Text style={{
            color: "black",
            marginTop: 10,
            fontSize: 20,
            textAlign: 'center',
          }}>Construyendo Futuro</Text>

          <Text style={{
            height: 45,
            color: "black",
            fontSize: 20,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }} >Usuario</Text>

          <TextInput style={{
            height: 45,
            color: "black",
            fontSize: 20,
            marginTop: -20,
            marginLeft: 20,
            marginRight: 20,
            paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "gray",
          }}
            placeholder="Usuario"
          />

          <Text style={{
            height: 45,
            color: "black",
            fontSize: 20,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }} >Contraseña</Text>

          <TextInput style={{
            height: 45,
            color: "black",
            fontSize: 20,
            marginTop: -20,
            marginLeft: 20,
            marginRight: 20,
            paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "gray",
          }}
            placeholder="Contraseña"
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("auth")}
            style={{
              backgroundColor: '#198754',
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 55,
              marginBottom: 20,
              width: 220,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,
              elevation: 11,
            }}
          >
            <Text style={{
              color: '#FFFFFF',
              fontSize: 20,
              textAlign: "center",
              padding: 11
            }}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};
export default Login;