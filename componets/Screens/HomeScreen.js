// import { View, Text } from 'react-native'
// import React from 'react'

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   )
// }

// export default HomeScreen



import { View, Text,StyleSheet, TouchableOpacity, Image,onPress } from 'react-native'
import React, { useState } from 'react'
import Styles from '../common/Styles'
import Header from '../common/Header'
import Home from './Home'
import Search from './Search'
import WishList from './WishList'
import Notifications from './Notifications'
import Profile from './Profile'


export default function HomeScreen() {
const [selectedtab,SetselectedTab]=useState(0)
return (

<>

<View>
{/* Bottom Component */}
{selectedtab==0?(<Home/>):selectedtab==1?(<WishList/>):selectedtab==2?(<Search/>):selectedtab==3?(<Notifications/>):selectedtab==4?(<Profile/>):<Home/>}
</View>
<View style={styles.bottom}>
<TouchableOpacity  onPress={()=>SetselectedTab(0)}>
  <Image source={require("../images/home.png")} style={{width:25,height:25}}/>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>SetselectedTab(1)}>
  <Image source={require("../images/heart.png")} style={{width:25,height:25}}/>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>SetselectedTab(2)}>
  <Image source={require("../images/search.png")} style={{width:25,height:25}}/>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>SetselectedTab(3)}>
  <Image source={require("../images/bell.png")} style={{width:25,height:25}}/>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>SetselectedTab(4)}>
  <Image source={require("../images/profile1.png")} style={{width:25,height:25}}/>
</TouchableOpacity>
</View>
</>



  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  bottom:{
    position:"absolute",
    width:"100%",
    bottom:0,
    height:55,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    
  }
})