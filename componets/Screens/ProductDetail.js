import {Button,onPress,Image, View, Text,StyleSheet,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { addItemtoWishlist } from '../redux/slices/ProductsSlice'
import { useNavigation,useRoute } from '@react-navigation/native'
import CustomButton from '../common/CustomButton'
import Home from './Home'
import { useDispatch } from 'react-redux'
import Main from './Main'
const ProductDetail = () => {
const route=useRoute();
const dispatch=useDispatch()
    const navigation=useNavigation()
    const datas=route.params.data
    return (
      
    <View style={styles.container}>
        <Header leftIcon={require("../images/back.png")} rightIcon={require("../images/bag.png")} title={"Product Details"}
        onPress={()=>{console.log("clicked")}}
        />
  
    <View style={styles.productCard}><Image source={{uri:datas.image}} style={{height:300,width:300,marginLeft:"10%",}}/>
    <TouchableOpacity >
      <View style={styles.wishCart}><Image source={require("../images/heart.png")} style={{width:30,height:30,marginTop:10}}/></View>  
      </TouchableOpacity>  
      <Text style={styles.desc}>{datas.title}</Text>
      <View>
                <Text style={styles.desc}>{datas.description}</Text>
                <Text style={styles.desc}>Price is Rs{datas.price}</Text>
                <Button
  onPress={() => {
dispatch(addItemtoWishlist(datas))
navigation.navigate(Main);

}}
  title="Press Me"
/>
      </View>

</View>
    </View>
  )
}

export default ProductDetail

const styles=StyleSheet.create({
    container:{
        flex:1,
  },
  productCard:{
    height:"90%",
    width:"95%",
    margin:10,
    marginLeft:5,
     
       
    backgroundColor:"white",
    borderRadius:40,
    borderWidth:3,
    borderColor:"grey",
    
  },
  Titles:{
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center"
  },
  desc:{
    marginRight:10,
    marginLeft:25,
    marginTop:15 ,
    width:"90%",
    fontSize:19,
    fontWeight:"bold",
  },
  wishCart:{
    width:50,
    height:50,
    top:-290,
    left:320,
    position:"absolute",
    alignContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"grey",
    

  }
})