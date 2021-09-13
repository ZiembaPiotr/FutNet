import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAuthentication from "./UserAuthentication/UserAuthentication"
import AppContent from "./screens/AppContent"
import {IsLoggedContext} from "./IsLoggedContext";


const Stack = createNativeStackNavigator()

export default function Root(){
    const [isLogged, setIsLogged] = useState(false)

    return(
        <IsLoggedContext.Provider value={{setIsLogged}} >
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {isLogged ? (<Stack.Screen name="AppContent" component={AppContent} />)
                        : ((<Stack.Screen name="UserAuthentication" component={UserAuthentication} />))
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </IsLoggedContext.Provider>
    );
}
