import React, { useState } from "react";
import {Text, View, Button, StyleSheet, Pressable, TextInput, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {userAuthenticationStyle} from "../styles/userAuthenticationStyle"
import { useCycle } from "framer-motion";

export default function SignUp() {
    const navigation = useNavigation()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")

    const [userFieldStyle, setUserFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [passwordFieldStyle, setPasswordFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [repeatedFieldStyle, setRepeatedPasswordFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [emailFieldStyle, setEmailFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)

    const toLogInScreen = () => {
        navigation.navigate("SignIn")
    }

    const usernameChangeHandler = (value) => {
        setUsername(value)
    }

    const emailChangeHandler = (value) => {
        setEmail(value)
    }

    const passwordChangeHandler = (value) => {
        setPassword(value)
    }

    const repeatedPasswordChangeHandler = (value) => {
        setRepeatedPassword(value)
    }

    const changeUserFieldStyle = () => {
        setUserFieldStyle()
    }

    const changeEmailFieldStyle = () => {
        setEmailFieldStyle()
    }

    const changePasswordFieldStyle = () => {
        setPasswordFieldStyle()
    }

    const changeRepeatedPasswordFieldStyle = () => {
        setRepeatedPasswordFieldStyle()
    }

    const confirmSingUpNavigation = () => {
        navigation.navigate("SingUpConfirmation", {
            email: email
        })
    }

    return(
        <ScrollView style={userAuthenticationStyle.container} >
            <View style={userAuthenticationStyle.option}>
                <Pressable onPress={toLogInScreen}>
                    <Text style={userAuthenticationStyle.optionText}>Log in</Text>
                </Pressable>
                <Pressable>
                    <Text style={userAuthenticationStyle.optionMarked}>Register</Text>
                </Pressable>
            </View>
            <View style={userAuthenticationStyle.container}>
                <TextInput placeholder={"Username"}
                           onChangeText={(value) => usernameChangeHandler(value)}
                           defaultValue={username}
                           style={userFieldStyle}
                           onFocus={changeUserFieldStyle}
                           onBlur={changeUserFieldStyle}
                />
                <TextInput placeholder={"E-mail"}
                           onChangeText={(value) => emailChangeHandler(value)}
                           defaultValue={email}
                           style={emailFieldStyle}
                           onFocus={changeEmailFieldStyle}
                           onBlur={changeEmailFieldStyle}
                />
                <TextInput placeholder={"Password"}
                           onChangeText={() => passwordChangeHandler(value)}
                           defaultValue={password}
                           style={passwordFieldStyle}
                           onFocus={changePasswordFieldStyle}
                           onBlur={changePasswordFieldStyle}
                />
                <TextInput placeholder={"Repeat password"}
                           onChangeText={(value) => repeatedPasswordChangeHandler(value)}
                           defaultValue={repeatedPassword}
                           style={repeatedFieldStyle}
                           onFocus={changeRepeatedPasswordFieldStyle}
                           onBlur={changeRepeatedPasswordFieldStyle}
                />
            </View>
            <Pressable onPress={confirmSingUpNavigation}>
                <View style={userAuthenticationStyle.button}>
                    <Text style={userAuthenticationStyle.buttonText}>Register</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
}
