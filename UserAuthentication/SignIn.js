import React, {useContext, useState} from "react";
import {Text, View, Button, Image, StyleSheet, Pressable, TextInput, ScrollView} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {IsLoggedContext} from "../IsLoggedContext"
import { useCycle } from "framer-motion";
import {userAuthenticationStyle} from "../styles/userAuthenticationStyle"


export default function SignIn() {
    const navigation = useNavigation()
    const { setIsLogged } = useContext(IsLoggedContext)

    const [userFieldStyle, setUserFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [passwordFieldStyle, setPasswordFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        setIsLogged(true)
    }

    const toRegisterScreen = () => {
        navigation.navigate("SignUp")
    }

    const changeUsernameStyle = () => {
        setUserFieldStyle()
    }

    const changePasswordStyle = () => {
        setPasswordFieldStyle()
    }

    const changeUsernameHandler = (value) => {
        setUsername(value)
    }

    const changePasswordHandler = (value) => {
        setPassword(value)
    }

    return(
        <ScrollView style={userAuthenticationStyle.container} >
            <View style={userAuthenticationStyle.option}>
                <Pressable>
                    <Text style={userAuthenticationStyle.optionMarked}>Log in</Text>
                </Pressable>
                <Pressable onPress={toRegisterScreen}>
                    <Text style={userAuthenticationStyle.optionText}>Register</Text>
                </Pressable>
            </View>
            <View style={userAuthenticationStyle.form}>
                <TextInput placeholder={"Username"}
                           onChangeText={(value) => {changeUsernameHandler(value)}}
                           defaultValue={username}
                           style={userFieldStyle}
                           onFocus={changeUsernameStyle}
                           onBlur={changeUsernameStyle}
                />
                <TextInput onChangeText={(value) => {changePasswordHandler(value)}}
                           placeholder={"Password"}
                           style={passwordFieldStyle}
                           onFocus={changePasswordStyle}
                           onBlur={changePasswordStyle}
                           secureTextEntry={true}
                />
                <Pressable onPress={loginHandler}>
                    <View style={userAuthenticationStyle.button}>
                        <Text style={userAuthenticationStyle.buttonText}>Log in</Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    );
}
