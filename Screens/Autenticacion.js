import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import { Camera } from 'expo-camera';
import {Api} from '../Backend/Api';
import { useNavigation } from '@react-navigation/native'


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })(); 
  }, []);

  //Mostrar todas las imagenes
  
  const [ img, setImg] = useState([])

  const Imagenes = async () => {
     const data = await Api()
     setImg(data)
     console.log(data[0].imagen);
    
  }
  useEffect(() => {
    Imagenes()
    
  }, [])

  

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Cambiar camara </Text>
          </TouchableOpacity>
        </View>
      </Camera>

  
      {/* <FlatList
           data={img}
           key={"2"}
           numColumns={2}
           return renderItem={({ item, index}) => (
             <Image
               source={{uri:'http://192.168.1.117:4000/' + item.imagen }}
               style={{
                 width: 180,
                 height: 220,
                 borderWidth: 2,
                 borderColor: "red",
                 resizeMode: "contain",
                 margin: 6,
               }}
               keyExtractor={(item) => item + ''}
             />


             
           )}

           
      /> */}
      
               <TouchableOpacity
                  style={styles.colorBtn}
                  onPress={() => navigation.navigate("prueba")}
                >
                  <Text style={styles.colorTxtBtn}>Aceptar</Text>
                </TouchableOpacity> 
      
    </View>

   
  );
}

const styles = StyleSheet.create({
 
  camera: {
    alignSelf: 'center',
    marginTop: 10,
    height: 300,
    width: 250,
    
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  colorBtn: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginTop: 40
  },
});




