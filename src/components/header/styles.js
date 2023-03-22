import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        height:'20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize:30,
        fontFamily:'Raleway-Medium'
    }
});
