import React, {useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SingUpConfirmation from "./SingUpConfirmation"
import {Image, StyleSheet, Text, View} from "react-native";


const Stack = createNativeStackNavigator()

export default function UserAuthentication() {


    return(
        <View style={styles.container}>
            <View style={styles.logo} >
                <Image source={require("../assets/logo.png")} />
            </View>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SingUpConfirmation" component={SingUpConfirmation}/>
            </Stack.Navigator>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    logo: {
        marginTop: 70,
        alignItems: "center"
    }
})