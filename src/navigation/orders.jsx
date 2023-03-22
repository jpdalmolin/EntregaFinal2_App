import { Orders } from "../screens";
import { colors } from "../constants/theme/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrdersNavigator=()=>{
    return(
        <Stack.Navigator
        initialRouteName="Orders"
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


            <Stack.Screen name="Order" component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrdersNavigator;