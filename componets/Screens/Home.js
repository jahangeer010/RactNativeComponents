import {Image, View,TextInput, Text,Alert ,Button,FlatList,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React ,{useEffect,useState}from 'react'
import Header from '../common/Header'
import { NavigationContainer } from '@react-navigation/native'
import {useNavigation} from "@react-navigation/native"
import { useDispatch } from 'react-redux/es/exports'
import { addProducts } from '../redux/slices/ProductsSlice'
import { useSelector } from 'react-redux'
const Home = () => {
  const RedData=useSelector(state=>state.product)
const navigation=useNavigation()
const dispatch=useDispatch()

  const [products,Setproducts]=useState([])
// setting filter Logic
const Texthandle=(text)=>{
  console.warn(text)
  const newdata=products;
  

}

  useEffect(()=>{
const res= fetch("https://fakestoreapi.com/products").then(response=>response.json())
  .then(json=>Setproducts(json)).catch(error => console.error(error));
dispatch(addProducts(products))    
  },[])

  return (
    <View>
<Header leftIcon={require("../images/Menu.png")} title={"Grocery App"} rightIcon={require("../images/bag.png")} />
{/* INUPUT */}
<TextInput placeholder='Enter Text' onChangeText={(text)=>Texthandle(text)}/>
{/* PRoducts Lsit */}
{/* {console.log("Homejs"+(JSON.stringify(RedData)))} */}
<FlatList data={products} renderItem={({item,index})=>{
  return(<TouchableOpacity style={style.productItem} onPress={()=>{navigation.navigate("ProductDetail",{data:item})}}>
    <Image source={{uri:item.image}} style={{height:100,width:100}}/>
    <View><Text>{item.title.length>30?item.title.substring(0,30)+".....":item.title}</Text></View>
    </TouchableOpacity>)
}}/>
    </View>
  )
}

export default Home

const style=StyleSheet.create({
  productItem:{
  width:Dimensions.get("window").width,
  height:100,
  backgroundColor:"white",
  flexDirection:"row",
  marginTop:5,  

  }
})