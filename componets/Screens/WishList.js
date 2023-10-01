import {Image, View,TextInput, Text,Alert ,Button,FlatList,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
  const app=useSelector((item)=>item)
const newdata=JSON.stringify(app.product.WishList)
const [products,Setproducts]=useState("")

  useEffect(()=>{
    console.log(">>>>>"+(app.product.WishList))
    Setproducts(app.product.WishList)
  },[])
  
  return (
        
<View>
{console.log("added"+JSON.stringify(products))}
<Text>YOUR FAVORIATE PRODUCTS ADDED</Text>
<FlatList data={products} renderItem={({item,index})=>{
  return(<TouchableOpacity>
<View>
<Text>{item.title}</Text>
<Image source={{uri:item.image}} style={{height:100,width:100}}/>
  </View>
    </TouchableOpacity>)
}}/>
 


</View>
      
  

  )
}

export default WishList

const style=StyleSheet.create({
  productItem:{
  width:Dimensions.get("window").width,
  height:100,
  backgroundColor:"white",
  flexDirection:"row",
  marginTop:5,  

  }
})