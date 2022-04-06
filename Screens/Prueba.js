import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  Dimensions,  FlatList, Image  } from 'react-native';
import { Camera } from 'expo-camera'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [box, setBox] = useState(null)

  const handlerFace = ({faces}) => {
    console.log(faces);
    if (faces[0]){
       setBox({
         boxs: {
           width: faces[0].bounds.size.width,
           height: faces[0].bounds.size.height,
           x: faces[0].bounds.origin.x,
           y: faces[0].bounds.origin.y,
           yawAngle: faces[0].yawAngle,
           rollAngle: faces[0].rollAngle
         },
           rightEyePosition: faces[0].rightEyePosition,
           leftEyePosition: faces[0].leftEyePosition,
           bottomMounthPosition: faces[0].bottomMounthPosition
         
       })
    }else {
      setBox(null)
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const [ img, setImg] = useState([])

  // const Imagenes = async () => {
  //    const data = await Api()
  //    setImg(data)
  //    console.log(data[0].imagen);
    
  // }
  // useEffect(() => {
  //   Imagenes()
    
  // }, [])

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}
       captureAudio = {false}
       onFacesDetected = {handlerFace}
      />
      {box &&(
        <>
         {/* <FlatList
           data={img}
           key={"2"}
           numColumns={2}
           return renderItem={({ item, index}) => (
             <Image
               source={{uri:'http://192.168.1.8:4000/' + item.imagen }}
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
             )}/> */}

        <View style = {styles.bound({
          width: box.boxs.width,
          height: box.boxs.width,
          x: box.boxs.x,
          y:box.boxs.y,
          
        })} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    alignSelf: 'center',
    marginTop: 10,
    height: 400,
    width: 300,
    
  },
  // buttonContainer: {
  //   flex: 1,
  //   backgroundColor: 'transparent',
  //   flexDirection: 'row',
  //   margin: 20,
  // },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  bound:({width, height,x,y}) => {
    return {
      position: 'absolute',
      top: y,
      left: x,
      height,
      width,
      borderWidth: 5,
      borderColor: 'red',
      zIndex: 3000,
    }
  }
});

