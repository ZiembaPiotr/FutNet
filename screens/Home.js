import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { IsLoggedContext } from "../IsLoggedContext";

export default function Home() {
  const { setIsLogged } = useContext(IsLoggedContext);

  const logOut = () => {
    setIsLogged(false);
  };

  return (
    <View>
      <Text>HOME SCREEEEEN AVEEEEEEEEEEEE</Text>
      <Button title="log out" onPress={() => logOut()} />
    </View>
  );
}
