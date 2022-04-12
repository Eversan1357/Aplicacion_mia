import React, { useEffect, useState, } from 'react';
import { StyleSheet, } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'
import axios from 'axios'

function Login() {





  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          ¡Este campo es obligatorio!
        </div>
      );
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.form}>
        <Text style={styles.logintext1}>Bienvenido</Text>
        <Text style={styles.logintext2}>Fundación Mía</Text>
        <Text style={styles.logintext3}>Construyendo Futuro</Text>
        <Formik>
          <View>
            <Text style={styles.inputtext}>Usuario</Text>
            <TextInput
              //value={values.usernameOrEmail}
              //onChangeText={text => setFieldValue('usernameOrEmail', text)}
              style={styles.email}
              placeholder="Usuario"
              validations={[required]}
            />
            <Text style={styles.inputtext}>Contraseña</Text>
            <TextInput
              //value={values.password}
              //onChangeText={text => setFieldValue('password', text)}
              style={styles.contraseña}
              placeholder="Contraseña"
              validations={[required]}
              secureTextEntry
            />
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.botontext}>Iniciar Sesion</Text>
            </TouchableOpacity>
          </View>
        </Formik>
      </View>
    </View>
  )
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

  boton: {
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
  },

  botontext: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: "center",
    padding: 11
  },

  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  }

});

export default Login;