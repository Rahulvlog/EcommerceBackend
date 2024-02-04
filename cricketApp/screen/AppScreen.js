import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import appPage from "../assets/appPage.png"

const AppScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={appPage} />
        <View style={styles.text1}>
            <Text style={styles.text11}>
                Hello
            </Text>
            
        </View>
        <View style={styles.text2}>
            <Text style={styles.text12}>
                Welcome To Little Drop,where you manage you daily tasks
            </Text>
        </View>

        
            <TouchableOpacity  style={{width:"86%",  alignItems:"center", backgroundColor:"blue", borderRadius:20, padding:10, marginTop:30}}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{width:"86%",  alignItems:"center", backgroundColor:"blue", borderRadius:20, padding:10, marginTop:8}}>
                <Text>SignUp</Text>
            </TouchableOpacity>


            <View>
                
            </View>
        


      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:"white"
    },
    container: {
       flex:1,
       flexDirection:"column",
       marginTop:50,
       alignItems:"center",
       


    },
    logo:{
        width:300,
        height:300
    },
    text11:{
        fontWeight:"bold",
        color:"black",
        fontSize:16
    },
    text12:{
        fontSize:12,
        color:"black"
    }
})

export default AppScreen