import React, {useState} from 'react';
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
    <>      
        <View>
          
          <Text style={styles.formulario}> INICIAR SESSION</Text>
 
          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{  email:'', contraseña: ''}}
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
 
                
 
                <TextInput style={styles.email} 
                  placeholder="Usuario"
                 /> 
 
                  {(errors.email && touched.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }
         
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
    </>
  )
};
 
const styles = StyleSheet.create({
 
  formulario: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 100,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
 
  
 
  email: {
    color: Colors.dark,
    fontSize: 18,
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
    color: Colors.dark,
    fontSize: 18,
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
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginTop: 40
  },
 
  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
 
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  }
 
});
 
