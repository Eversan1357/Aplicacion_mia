import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  loginValidationSchema
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Login() {

  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.form}>
        <Text style={styles.text}>Bienvenido</Text>
        <Text style={styles.text}>Fundación Mía</Text>
        <Text style={styles.text}>Construyendo Futuro</Text>

        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', contraseña: '' }}
          onSubmit={values => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <Text>Usuario</Text>
              <TextInput style={styles.email}
                placeholder="Usuario"
              />

              {(errors.email && touched.email) &&
                <Text style={styles.errorText}>{errors.email}</Text>
              }
              <Text>Contraseña</Text>
              <TextInput style={styles.contraseña}
                placeholder="Contraseña"
              />

              {(errors.telefono && touched.telefono) &&
                <Text style={styles.errorText}>{errors.telefono}</Text>
              }

              <TouchableOpacity
                style={styles.colorBtn}
                onPress={() => navigation.navigate("auth")}
              >
                <Text style={styles.colorTxtBtn}>Iniciar Sesion</Text>
              </TouchableOpacity>
            </>
          )}
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

  text: {
    color: Colors.black,
    fontSize: 20,
    marginTop: 60,
    textAlign: 'center',
  },


  email: {
    height: 50,
    color: Colors.dark,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },

  contraseña: {
    height: 50,
    color: Colors.dark,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },

  colorBtn: {
    backgroundColor: '#198754',
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
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

  colorTxtBtn: {
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

