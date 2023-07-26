import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Card = ({onPress, isTurnedOver, children, card}) =>{
    return(
        <Pressable 
        onPress={onPress}
        style = {isTurnedOver ? styles.cardUp : styles.cardDown}
        >
            {isTurnedOver ? (
                <Text style = {styles.text}>{children}</Text>
            ):(
                <Text style = {styles.text}>?</Text>  
            )}
            
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    cardUp: {
        width:100,
        height:100,
        margin:10,
        backgroundColor:"#4F5BB5",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25
    },
    cardDown: {
        width:100,
        height:100,
        margin:10,
        backgroundColor:"#4F5BB5",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        borderWidth:10,
        borderColor:"#334155"
    },
    text: {
        fontSize: 46,
        color: "#334155"
    }
})

export default Card;