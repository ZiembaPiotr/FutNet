import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { userAuthenticationStyle } from "../styles/userAuthenticationStyle";
import RegistrationForm from "./RegisterForm";
import axios from "axios";
import useAxiosGet from "../customHooks/useAxiosGet";
import { ngrokURL } from "../ngrokURL";

export default function SignUp() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const emailRegex = new RegExp(
    "[A-Z|a-z|0-9]+[@][A-Z|a-z]+[.][A-Z|a-z]+",
    "g"
  );

  const postUser = async () => {
    if (password === repeatedPassword) {
      if (emailRegex.test(email)) {
        try {
          let isUsernameAvailable = await axios.get(ngrokURL + "/users", {
            params: {
              username: username,
            },
          });
          let isEmailAlreadyUsed = await axios.get(ngrokURL + "/users", {
            params: {
              email: email,
            },
          });
          const numberOfUsers = await useAxiosGet(ngrokURL + "/users").length;
          if (
            isUsernameAvailable.data.length === 0 &&
            isEmailAlreadyUsed.data.length === 0
          ) {
            await axios.post(ngrokURL + "/users", {
              id: numberOfUsers + 1,
              username: username,
              password: password,
              email: email,
            });
            confirmSingUpNavigation();
          } else {
            alert("User with that username or email already exist!");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Insert valid email!");
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  const toLogInScreen = () => {
    navigation.navigate("SignIn");
  };

  const confirmSingUpNavigation = () => {
    navigation.navigate("SingUpConfirmation", {
      email: email,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <ScrollView style={userAuthenticationStyle.container}>
        <View style={userAuthenticationStyle.option}>
          <Pressable onPress={toLogInScreen}>
            <Text style={userAuthenticationStyle.optionText}>Log in</Text>
          </Pressable>
          <Pressable>
            <Text style={userAuthenticationStyle.optionMarked}>Register</Text>
          </Pressable>
        </View>
        <RegistrationForm
          {...{
            setUsername,
            setPassword,
            setRepeatedPassword,
            setEmail,
          }}
        />
        <Pressable onPress={postUser}>
          <View style={userAuthenticationStyle.button}>
            <Text style={userAuthenticationStyle.buttonText}>Register</Text>
          </View>
        </Pressable>
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
