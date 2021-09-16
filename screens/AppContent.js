import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import LoadingScreen from "../LoadingScreen"

const Drawer = createDrawerNavigator()

export default function UserAuthentication() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}