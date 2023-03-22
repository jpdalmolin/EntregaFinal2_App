import AuthNavigator from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import TabNavigator from "./tabs";
import react from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const AppNavigator = ()=>{
    const userId= useSelector((state) => state.auth.userId);
    
    return (
        <NavigationContainer>
            {
                userId ? <TabNavigator/> : <AuthNavigator/>
            }
            
        </NavigationContainer>
    );
};

export default AppNavigator;