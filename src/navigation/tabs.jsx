import CartNavigator from "./cart";
import Ionicons from '@expo/vector-icons/Ionicons'
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { colors } from "../constants/theme/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import placesNavigator from "./places";
import react from "react";
import { useSelector } from "react-redux";

const BottomTab=createBottomTabNavigator();

const TabNavigator=()=>{
    const cart = useSelector((state) => state.cart.items);
    return(
    <BottomTab.Navigator 
    initialRouteName="Shop"
    screenOptions={{
        headerShown:false,
        tabBarLabelStyle:{
            fontFamily: 'Raleway-Regular',
            fontSize:12,
        },
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor:colors.secondary
    }}>
        <BottomTab.Screen 
            name ="Shop" 
            component={ShopNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name={focused ? 'home'  : 'home-outline'}
                        size={22}
                        color={colors.primary}
                    />
                )
            }} 
            />
        <BottomTab.Screen 
            name ="Orders" 
            component={OrdersNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name={focused ? 'file-tray'  : 'file-tray-outline'}
                        size={22}
                        color={colors.primary}
                    />
                )
            }}
            />
        <BottomTab.Screen 
            name ="Cart" 
            component={CartNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name={focused ? 'cart'  : 'cart-outline'}
                        size={22}
                        color={colors.primary}
                    />
                ),
                tabBarBadge:cart.length,
                tabBarBadgeStyle:{
                    backgroundColor:colors.background,
                    color:colors.primary,
                    fontFamily:'Raleway-Bold',
                    fontSize:14
                }



            }} 
            />
             <BottomTab.Screen 
            name ="Places" 
            component={placesNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name="pin"
                        size={22}
                        color={colors.primary}
                    />
                ),
                



            }} 
            />
    



    </BottomTab.Navigator>
)}

export default TabNavigator;