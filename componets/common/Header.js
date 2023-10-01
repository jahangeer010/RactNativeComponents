import { View, Text, Dimensions,StyleSheet, TouchableOpacity, Image,Alert,onPress } from 'react-native'
import React,{useEffect,useState} from 'react'
import Styles from './Styles'
import {useNavigation} from "@react-navigation/native"

const {height,width}=Dimensions.get('window')
const Header = ({title,leftIcon,rightIcon,onClickLeftIcon,onClickRightIcon}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.header }>
      <TouchableOpacity style={styles.btn} onPress={()=>{navigation.openDrawer()}} >
      <Image  source={leftIcon} style={styles.icon} />
</TouchableOpacity>
<Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
      <Image  source={rightIcon} style={[styles.icon,{width:35,height:35}]}/>

      </TouchableOpacity>
    </View>
  )
}

export default Header
const styles=StyleSheet.create({
  header:{
    width:width,
    height:60,
    backgroundColor:"#0078FD",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingLeft:15,
    paddingRight:15,
  },
  btn:{
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
  },
  icon:{
    width:30,
    height:30,
    tintColor:"white"
  },
  title:{
    color:"white",
    fontSize:22,
  }

})