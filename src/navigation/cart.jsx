import { Cart } from "../screens";
import { colors } from "../constants/theme/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartNavigator=()=>{
    return(
        <Stack.Navigator
        initialRouteName="InCart"
        screenOptions={{
            headerStyle:{
                backgroundColor:"white"
                

            },
            headerTintColor: colors.primary,
            navigationBarColor: colors.secondary,
            headerTitleStyle:{
                fontFamily:'Raleway-Bold',
                fontSize:18,
                color:'orange',
            },
        }}>


            <Stack.Screen name="InCart" component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartNavigator;