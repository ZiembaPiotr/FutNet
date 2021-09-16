import { LinearProgress } from 'react-native-elements';
import {Image, StyleSheet, View} from "react-native";
import React from "react";

export default function LoadingScreen(){
    return(
        <View style={styles.container} >
            <View style={styles.logo} >
                <Image source={require("./assets/logo.png")} />
            </View>
            <View style={styles.bar}>
                <LinearProgress color="#E83134" style={{height: "15%"}} />
            </View>
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
    },
    bar: {
        paddingTop: "20%",
        justifyContent: "center",
        alignItems: "center"
    }
})