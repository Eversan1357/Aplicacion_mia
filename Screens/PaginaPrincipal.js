import React from 'react'
import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PaginaPrincipal = () => {

  const navigation = useNavigation();

  return (
    <View style={{
      height: "100%",
      width: "100%",
      backgroundColor: "white"
    }}>
      <Image
        style={{
          margin:10,
          resizeMode: "cover",
          height: "45%",
          width: 350,
          alignSelf: "center",
          marginTop: 15,
          borderRadius: 50,
          borderColor: "#CDD1E2",
          borderWidth: 2,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,
          elevation: 24,
        }}
        source={require("../assets/img1.jpeg")}
      />
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 80,
          color: '#1B1E37',
          fontSize: 25
        }}>
        Fundación MIA</Text>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          color: '#1B1E37',
          fontSize: 25
        }}>
        Construyendo Futuro</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("inicio_session")}
        style={{
          backgroundColor: "#FA0E0E",
          padding: 10,
          marginTop: 80,
          width: 250,
          alignSelf: "center",
          borderRadius: 15,
          borderColor: "#CDD1E2",
          borderWidth: 1.5,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 100,
          },
          shadowOpacity: 100,
          shadowRadius: 50,
          elevation: 24,
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "white",
          }}>
          Ingresar
        </Text>

      </TouchableOpacity>



    </View>
  )
}

export default PaginaPrincipal