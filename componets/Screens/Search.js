import { Image,TouchableOpacity,Dimensions,TextInput,View, Text, FlatList,StyleSheet } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/slices/ProductsSlice'
import { useNavigation,useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'


const Search = () => {
const products=[{
  id:1,name:"Wireless Mouse",
},
{
  id:2,
  name:"Smart Phone",
},
{
  id:3,
  name:"Laptop",
},
{
  id:4,
  name:"Blue tooth Speaker",
}
]
const dispatch=useDispatch()
const route=useRoute();
const app=useSelector((item)=>console.log(item))
const [productData,Setproducts]=useState("")
useEffect(()=>{
  const res= fetch("https://fakestoreapi.com/products").then(response=>response.json())
  .then(json=>Setproducts((json))).catch(error => console.error(error));
  {console.log("API DATA>>>"+productData)}

  {console.log("API DATA>>>"+JSON.stringify(productData))}
},{})


const [userInput,SetUserInput]=useState("")



const filterData=(item)=>{
if(userInput==""){
  
  
  return(  
  <>
  <TouchableOpacity style={style.productItem} onPress={()=>{dispatch(addProducts(item))}}>
  <Image source={{uri:item.image}} style={{height:100,width:100}}/>
   <View style={{flexDirection:"column"}}> 
<Text>{item.title}</Text>
<View><Text style={{fontWeight:"600",color:"black"}} >Price :Rs{item.price}</Text></View>
</View>

  </TouchableOpacity>
  
  </>
  )
}
if(item.title.toLowerCase().includes(userInput.toLowerCase())){
 return(
  <TouchableOpacity style={style.productItem} onPress={()=>{dispatch(addProducts(item))}}>
<Image source={{uri:item.image}} style={{height:100,width:100}}/>
   <View style={{flexDirection:"column"}}> 
<Text>{item.title}</Text>
<View><Text>Price :Rs {item.price}</Text></View>
</View>

  </TouchableOpacity>
  )
}
}
// const newdata=JSON.stringify(productData)
  return (
    <View>
      <Text>Filter Products</Text>
      <TextInput placeholder='Enter your Text' onChangeText={(text)=>{SetUserInput(text)}}/>
      <View>
        <FlatList data={productData} renderItem={({item,index})=>
        filterData(item)
        
      }/>
      </View>
    </View>
  )
}

export default Search
const style=StyleSheet.create({
  productItem:{
  width:Dimensions.get("window").width,
  height:100,
  backgroundColor:"white",
  flexDirection:"row",
  marginTop:5,  

  }
})

// import {Image,TextInput, View, Text,Alert ,Button,FlatList,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
// import React ,{useEffect,useState}from 'react'
// import Header from '../common/Header'
// import { NavigationContainer } from '@react-navigation/native'
// import {useNavigation} from "@react-navigation/native"
// import { useDispatch } from 'react-redux/es/exports'
// import { addProducts } from '../redux/slices/ProductsSlice'
// import { useSelector } from 'react-redux'
// const Search = () => {
//   const RedData=useSelector(state=>state.product)
// const navigation=useNavigation()
// const dispatch=useDispatch()

//   const [products,Setproducts]=useState([])
//   useEffect(()=>{
// const res= fetch("https://fakestoreapi.com/products").then(response=>response.json())
//   .then(json=>Setproducts(json)).catch(error => console.error(error));
// dispatch(addProducts(products))    
//   },[])
//   return (
//     <View>
// <Header leftIcon={require("../images/Menu.png")} title={"Grocery App"} rightIcon={require("../images/bag.png")} />
// {/* PRoducts Lsit */}
// {console.log("Homejs"+(JSON.stringify(RedData)))}
// <View>
// <TextInput placeholder='hello ,....'/>
// </View>
// <FlatList data={products} renderItem={({item,index})=>{
//   return(<TouchableOpacity style={style.productItem} onPress={()=>{navigation.navigate("ProductDetail",{data:item})}}>
//     <Image source={{uri:item.image}} style={{height:100,width:100}}/>
//     <View>{console.log(Object.keys(item))}<Text>{item.title.length>30?item.title.substring(0,30)+".....":item.title}</Text></View>
    
//     </TouchableOpacity>)
// }}/>
//     </View>
//   )
// }

// export default Search

// const style=StyleSheet.create({
//   productItem:{
//   width:Dimensions.get("window").width,
//   height:100,
//   backgroundColor:"white",
//   flexDirection:"row",
//   marginTop:5,  

//   }
// })