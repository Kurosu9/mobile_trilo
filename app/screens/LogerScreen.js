import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from "react-native";

export default function LogerScreen( {navigation} ) {
    return (
        <View style={styles.container}>
            <View style={styles.trilo}>
                <Image style={{height: 450, width: 400, marginBottom:20}} source={require("../assets/images/plan.png")}/>
            </View>
            <View style={styles.trilo}>
                <Image style={{height: 55, width: 55, marginTop: 5}} source={require("../assets/images/trilo.png")}/>
                <Text style={styles.text}>Trilo</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.btn}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.btn}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    trilo: {
        flexDirection: 'row',
        textAlign: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    btn: {
        width: 350,
        padding: 14,
        backgroundColor: "#FFC0CB",
        marginTop: 15,
        borderRadius: 10,
        textAlign: 'center',
        color: "white",
        fontSize: 20,
    },
})