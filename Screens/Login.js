import React, { useState } from 'react';
import { StyleSheet, Alert, View, } from 'react-native';
import { Container, Button, Item, Input, Content, Form, Text } from 'native-base';

import axios from 'axios'

const Login = () => {

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [usernameOrEmailError, setUsernameOrEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [message, setMessage] = useState('');

  const signin = async () => {
    if (usernameOrEmail != "" && password != "") {
      //alert('Gracias por Iniciar Sesión');
      await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          'usernameOrEmail': usernameOrEmail,
          'password': password
        })

      }).then(res => res.json())
        .then(resData => {
          //alert(resData.message);
          setMessage(resData.message);
        })
    }

    if (usernameOrEmail != "") {
      alert(usernameOrEmail);
      setUsernameOrEmailError('');

    } else {
      setUsernameOrEmailError('El Nombre de Usuario no debe de estar vacío');
    }

    if (password != "") {
      alert(password);
      setPasswordError('');

    } else {
      setPasswordError('Tu contraseña no debe estar vaía')
    }
  }

  return (
    <Container style={styles.body}>
      <View style={styles.form}>
        <Text style={styles.logintext1}>Bienvenido</Text>
        <Text style={styles.logintext2}>Fundación Mía</Text>
        <Text style={styles.logintext3}>Construyendo Futuro</Text>
        <Text style={{color:'green'}}>{message}</Text>
        <Form >
          <Text style={styles.inputtext}>Usuario</Text>
          <Item style={styles.email} >
            <Input
              placeholder="Usuario"
              value={usernameOrEmail}
              onChangeText={(usernameOrEmail) => setUsernameOrEmail(usernameOrEmail)}
              onChange={() => setUsernameOrEmailError('')}
            />
          </Item>
          <Text style={{ color: 'red' }}>{usernameOrEmailError}</Text>

          <Text style={styles.inputtext}>Contraseña</Text>
          <Item style={styles.contraseña} >
            <Input
              placeholder="Contraseña"
              value={password}
              onChangeText={(password) => setPassword(password)}
              onChange={() => setPasswordError('')}
            />
          </Item>
          <Text style={{ color: 'red' }}>{passwordError}</Text>

          <Button style={styles.boton} onPress={signin}>
            <Text style={styles.botontext} >Iniciar Sesion</Text>
          </Button>

        </Form>
      </View>
    </Container>
  );
};


const styles = StyleSheet.create({

  body: {
    backgroundColor: "#FF3939",
    height: "100%",
    width: "100%"
  },

  form: {
    backgroundColor: "white",
    margin: 30,
    marginTop: 100,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  logintext1: {
    color: "black",
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center',
  },

  logintext2: {
    color: "black",
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },

  logintext3: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  inputtext: {
    height: 45,
    color: "black",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  email: {
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
  },

  contraseña: {
    height: 50,
    color: "black",
    fontSize: 20,
    marginTop: -20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
  },

  boton: {
    backgroundColor: '#198754',
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 20,
    width: 240,
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  botontext: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: "center",
  },

});

export default Login;