import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PaginaPrincipal = () => {

  const navigation = useNavigation();

  return (
    <View> 
         

      <TouchableOpacity
      onPress={() => navigation.navigate("inicio_session")}
      
      style = {{
        backgroundColor: "purple",
        padding: 10,
        marginTop: "130%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
      }}
      >
      
      <Text
        style = {{
          fontSize: 15,
          textAlign: "center",
          color: "white"
        }}
      > Iniciar


      </Text>

      </TouchableOpacity>
    </View>
  )
}

export default PaginaPrincipal

