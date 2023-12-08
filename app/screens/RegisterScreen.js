import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import MaterilaIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function RegisterScreen( {navigation} ) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Loger")}>
                <AntDesign style={{fontSize: 25}} name='arrowleft'/>
            </TouchableOpacity>
            <Text style={styles.text}>Register</Text>
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

            <Text style={{fontSize: 15, color: "#666", marginBottom: 15}}>Or, login with... </Text>

            <TouchableOpacity style={styles.img} onPress={() => {}}>
                <Image style={{height: 35, width: 35}} source={require('../assets/images/google.png')}/>
                <Text style={{fontSize: 22, marginLeft: 10}}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.img} onPress={() => {}}>
                <Image style={{height: 35, width: 35}} source={require('../assets/images/microsoft.png')}/>
                <Text style={{fontSize: 22, marginLeft: 10}}>Microsoft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.img} onPress={() => {}}>
                <Image style={{height: 35, width: 35}} source={require('../assets/images/apple.png')}/>
                <Text style={{fontSize: 22, marginLeft: 10}}>Apple</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    back: {
        marginBottom: 50,
        marginRight: 310,
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
    img: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 350,
        borderColor: "#ddd",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginBottom: 10,
    },
})