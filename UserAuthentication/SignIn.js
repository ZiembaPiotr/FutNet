import React, { useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IsLoggedContext } from "../IsLoggedContext";
import { useCycle } from "framer-motion";
import { userAuthenticationStyle } from "../styles/userAuthenticationStyle";
import { ngrokURL } from "../ngrokURL";
import axios from "axios";

export default function SignIn() {
  const navigation = useNavigation();
  const { setIsLogged } = useContext(IsLoggedContext);

  const [userFieldStyle, setUserFieldStyle] = useCycle(
    userAuthenticationStyle.formInput,
    userAuthenticationStyle.formInputMarked
  );
  const [passwordFieldStyle, setPasswordFieldStyle] = useCycle(
    userAuthenticationStyle.formInput,
    userAuthenticationStyle.formInputMarked
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    setIsLogged(true);
  };

  const toRegisterScreen = () => {
    navigation.navigate("SignUp");
  };

  const authoriseUser = async () => {
    try {
      let userValidation = await axios.get(ngrokURL + "/users", {
        params: {
          username: username,
          password: password,
        },
      });
      if (userValidation.data.length) {
        loginHandler();
      } else {
        alert("Wrong username or password");
      }
    } catch (e) {
      alert("Error! " + e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <ScrollView style={userAuthenticationStyle.container}>
        <View style={userAuthenticationStyle.option}>
          <Pressable>
            <Text style={userAuthenticationStyle.optionMarked}>Log in</Text>
          </Pressable>
          <Pressable onPress={toRegisterScreen}>
            <Text style={userAuthenticationStyle.optionText}>Register</Text>
          </Pressable>
        </View>
        <View style={userAuthenticationStyle.form}>
          <TextInput
            placeholder={"Username"}
            onChangeText={(value) => {
              setUsername(value);
            }}
            defaultValue={username}
            style={userFieldStyle}
            onFocus={setUserFieldStyle}
            onBlur={setUserFieldStyle}
          />
          <TextInput
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder={"Password"}
            style={passwordFieldStyle}
            onFocus={setPasswordFieldStyle}
            onBlur={setPasswordFieldStyle}
            secureTextEntry={true}
          />
          <Pressable onPress={authoriseUser}>
            <View style={userAuthenticationStyle.button}>
              <Text style={userAuthenticationStyle.buttonText}>Log in</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    marginTop: 70,
    alignItems: "center",
  },
});
