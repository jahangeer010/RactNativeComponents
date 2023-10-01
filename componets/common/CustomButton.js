import { View, Text,StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({bg,title,onClick,color}) => {
  return (
    <TouchableOpacity style={[styles.btn,{backgroundColor:bg}]} onPress={()=>onClick()}>
      <Text style={{color:color,fontSize:18,fontWeight:500}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles=StyleSheet.create({
    btn:{
        width:Dimensions.get("window").width-40,
        height:50,
        alignItems:"center",
        marginTop:30,
        marginLeft:5,
        borderRadius:10,
        
        justifyContent:"center",
    }
})