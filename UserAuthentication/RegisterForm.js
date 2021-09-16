import React, { useState } from "react";
import {Text, View, Button, StyleSheet, Pressable, TextInput, ScrollView, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {userAuthenticationStyle} from "../styles/userAuthenticationStyle"
import { useCycle } from "framer-motion";

export default function RegistrationForm({usernameChangeHandler, passwordChangeHandler, repeatedPasswordChangeHandler, emailChangeHandler}){
    const [userFieldStyle, setUserFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [passwordFieldStyle, setPasswordFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [repeatedFieldStyle, setRepeatedPasswordFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)
    const [emailFieldStyle, setEmailFieldStyle] = useCycle(userAuthenticationStyle.formInput, userAuthenticationStyle.formInputMarked)

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

    return(
        <View style={userAuthenticationStyle.container}>
            <TextInput placeholder={"Username"}
                       onChangeText={(value) => usernameChangeHandler(value)}
                       style={userFieldStyle}
                       onFocus={changeUserFieldStyle}
                       onBlur={changeUserFieldStyle}
            />
            <TextInput placeholder={"E-mail"}
                       onChangeText={(value) => emailChangeHandler(value)}
                       style={emailFieldStyle}
                       onFocus={changeEmailFieldStyle}
                       onBlur={changeEmailFieldStyle}
            />
            <TextInput placeholder={"Password"}
                       onChangeText={(value) => passwordChangeHandler(value)}
                       style={passwordFieldStyle}
                       onFocus={changePasswordFieldStyle}
                       onBlur={changePasswordFieldStyle}
            />
            <TextInput placeholder={"Repeat password"}
                       onChangeText={(value) => repeatedPasswordChangeHandler(value)}
                       style={repeatedFieldStyle}
                       onFocus={changeRepeatedPasswordFieldStyle}
                       onBlur={changeRepeatedPasswordFieldStyle}
            />
        </View>
    );
}