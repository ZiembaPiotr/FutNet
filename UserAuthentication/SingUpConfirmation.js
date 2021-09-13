import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import {userAuthenticationStyle} from "../styles/userAuthenticationStyle"
import {useNavigation, useRoute} from "@react-navigation/native";


export default function SingUpConfirmation() {
    const navigation = useNavigation()
    const route = useRoute()

    const goToLogIn = () => {
        navigation.navigate("SignIn")
    }

    return(
        <View style={userAuthenticationStyle.container}>
            <Text style={styles.confirmationText}>We have sent a confirmation e-mail to: {route.params?.email} </Text>
            <Pressable onPress={goToLogIn}>
                <View style={userAuthenticationStyle.button}>
                    <Text style={userAuthenticationStyle.buttonText}>To log in</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    confirmationText: {
        margin: 30,
        justifyContent: "center",
        fontSize: 18,
    }
})