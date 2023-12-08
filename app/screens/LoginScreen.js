import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import MaterilaIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default function LoginScreen() {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.login}>
                <MaterilaIcons style={styles.icon} name='alternate-email' size={20} color="black"/>
                <TextInput placeholder='Email' style={{flex:1, paddingVertical: 0, fontSize: 18}} keyboardType='email-address'/>
            </View>
            <View style={styles.login}>
                <FontAwesome5 style={styles.icon} name='lock' size={20} color="black"/>
                <TextInput placeholder='Password' style={{flex:1, paddingVertical: 0, fontSize: 18}} keyboardType='email-address'/>
            </View>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.forgot}>Forgot the password</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 15, color: "#666"}}>Or, login with... </Text>

            <TouchableOpacity onPress={() => {}}>
                <Image source={require('../assets/images/google.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    login: {
        width: 330,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 25,
        fontSize: 35,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 8,
        marginTop: 5,
    },
    btn: {
        width: 150,
        padding: 14,
        backgroundColor: "#BA4CB1",
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
        textAlign: 'center',
        color: "white",
        fontSize: 20,
    },
    forgot: {
        fontSize: 15,
        borderBottomWidth: 2,
        borderColor: "#666",
        paddingBottom: 1,
        marginBottom: 35,
        color: "#666",
    },
    // gam: {
    //     height: 24,
    //     width: 24,
    //     borderColor: "#ddd",
    //     borderWidth: 2,
    //     borderRadius: 10,
    //     paddingHorizontal: 30,
    //     paddingVertical: 10,
    // },
})