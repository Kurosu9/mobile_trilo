import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
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
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <Text>Forgot the password</Text>
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
})