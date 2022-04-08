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

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.form}>
        <Text style={styles.logintext1}>Bienvenido</Text>
        <Text style={styles.logintext2}>Fundación Mía</Text>
        <Text style={styles.logintext3}>Construyendo Futuro</Text>

        <Text style={styles.inputtext} >Usuario</Text>
        <TextInput style={styles.email}
          value={usernameOrEmail}
          onChangeText={text => setUsernameOrEmail(text)}
          placeholder="Usuario"
        />

        <Text style={styles.inputtext} >Contraseña</Text>
        <TextInput style={styles.contraseña}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          placeholder="Contraseña"
        />

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("auth")}
        >
          <Text style={styles.botontext}>Iniciar Sesion</Text>
        </TouchableOpacity>
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