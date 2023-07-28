import React from "react";
import { Pressable, Text, StyleSheet, Image } from "react-native";

const Card = ({onPress, isTurnedOver, children, image}) =>{
    return(
        <Pressable 
        onPress={onPress}
        style = {isTurnedOver ? styles.cardUp : styles.cardDown}
        >
            {isTurnedOver ? (
                <Image source={image} style={styles.image}/>
            ):(
                <Image source={require("../../assets/logo.png")} style={styles.image}/>  
            )}
            
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    cardUp: {
        width:100,
        height:100,
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        borderWidth:5,
        borderColor:"#CC0C14"
    },
    cardDown: {
        width:100,
        height:100,
        margin:10,
        backgroundColor:"#000000",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        borderWidth:5,
        borderColor:"#CC0C14"
    },
    text: {
        fontSize: 46,
        color: "#334155"
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "cover",
        borderRadius:20
      },
})

export default Card;