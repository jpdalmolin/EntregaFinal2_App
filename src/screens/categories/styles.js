import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    title:{
        fontSize:18,
        fontFamily:'Raleway-Light',
        color:colors.secondary,
        padding:10
    },
    containerList:{
        flex:1,
    }
});