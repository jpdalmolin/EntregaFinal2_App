import {Categories, ProductDetail, Products} from '../screens/index';
import { Text, TouchableOpacity, View } from 'react-native';

import {colors} from './../constants/theme/colors'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {

    return(
        <Stack.Navigator initialrouteName="Categories" 
        screenOptions={{
            headerTintColor:colors.primary,
            navigationBarColor:colors.secondary,
            headerTitleStyle:{
                fontFamily:'Raleway-Bold',
                fontSize:18,
            },
        
        }}>
            <Stack.Screen 
            name='Categories' 
            component={Categories} 
            options={{
                headerShown:true,
                title:"Categories",
                headerRight:()=>{
                    return(
                        <TouchableOpacity>
                            <Text>Click Here!</Text>
                        </TouchableOpacity>
                    )
                }
            }}/>
            <Stack.Screen name='Products'
             component={Products}  
             options={({route,navigation})=>({
                title:route.params.title,
                headerRight:()=>(
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text>Cart</Text>
                    </TouchableOpacity>
                )
             })}


                
            />
            <Stack.Screen 
            name='ProductDetail' 
            component={ProductDetail} 
            options={({route,navigation})=>({
                title:route.params.title,
                headerRight:()=>(
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text>Cart</Text>
                    </TouchableOpacity>
                )
             })}/>

        </Stack.Navigator>
    )
}

export default ShopNavigator;