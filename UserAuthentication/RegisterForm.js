import React, { useState } from "react";
import {
  View,
  TextInput,
} from "react-native";
import { userAuthenticationStyle } from "../styles/userAuthenticationStyle";
import { useCycle } from "framer-motion";

export default function RegistrationForm({
    setUsername,
    setPassword,
    setRepeatedPassword,
    setEmail
}) {
  const [userFieldStyle, setUserFieldStyle] = useCycle(
    userAuthenticationStyle.formInput,
    userAuthenticationStyle.formInputMarked
  );
  const [passwordFieldStyle, setPasswordFieldStyle] = useCycle(
    userAuthenticationStyle.formInput,
    userAuthenticationStyle.formInputMarked
  );
  const [repeatedFieldStyle, setRepeatedPasswordFieldStyle] = useCycle(
    userAuthenticationStyle.formInput,
    userAuthenticationStyle.formInputMarked
  );
  const [emailFieldStyle, setEmailFieldStyle] = useCycle(
    userAuthenticationStyle.formInput,
    userAuthenticationStyle.formInputMarked
  );

  return (
    <View style={userAuthenticationStyle.container}>
      <TextInput
        placeholder={"Username"}
        onChangeText={(value) => setUsername(value)}
        style={userFieldStyle}
        onFocus={setUserFieldStyle}
        onBlur={setUserFieldStyle}
      />
      <TextInput
        placeholder={"E-mail"}
        onChangeText={(value) => setEmail(value)}
        style={emailFieldStyle}
        onFocus={setEmailFieldStyle}
        onBlur={setEmailFieldStyle}
      />
      <TextInput
        placeholder={"Password"}
        onChangeText={(value) => setPassword(value)}
        style={passwordFieldStyle}
        onFocus={setPasswordFieldStyle}
        onBlur={setPasswordFieldStyle}
      />
      <TextInput
        placeholder={"Repeat password"}
        onChangeText={(value) => setRepeatedPassword(value)}
        style={repeatedFieldStyle}
        onFocus={setRepeatedPasswordFieldStyle}
        onBlur={setRepeatedPasswordFieldStyle}
      />
    </View>
  );
}
