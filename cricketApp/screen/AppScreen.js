import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';
import appPage from "../assets/appPage.png";

const AppScreen = ({ navigation}) => {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={appPage} />
                <View style={styles.text1}>
                    <Text style={styles.text11}>
                        Hi Music
                    </Text>

                </View>
                <View style={styles.text2}>
                    <Text style={styles.text12}>
                        Elevate Your Spirit with Sound.
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button icon="login" mode="contained" onPress={() => navigation.navigate('Login')}>
                        Login
                    </Button>

                    <Button icon="account-circle" mode="contained" onPress={() => navigation.navigate('SignUp') }>
                        SignUp
                    </Button>
                </View>



               <View style={styles.SignUp}>
                 <View>
                    <Text>Sign Up with  Social Media</Text>
                 </View>
                 <View style={styles.Icon}>
                    <Icon
                        source="google"
                        color="gray"
                        size={25}
                    />
                    <Icon
                        source="facebook"
                        color="gray"
                        size={25}
                    />
                    <Icon
                        source="instagram"
                        color="gray"
                        size={25}
                    />

                </View>
               </View>
                








            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 50,
        alignItems: "center",
        gap: 35,



    },
    logo: {
        width: 300,
        height: 300
    },
    text11: {
        
        fontWeight: "bold",
        color: "black",
        fontSize: 16
    },
    text12: {
        fontSize: 14,
        color: "black"
    },
    button: {
        width: "80%",
        flexDirection: "column",
        gap: 10
    },
    Icon:{
       flexDirection:"row", 
       gap:5
    },
    SignUp:{
        flexDirection:"column",
        alignItems:"center",
        gap:4
    }
})

export default AppScreen