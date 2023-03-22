import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container:{
       flex:1,
    },
    label:{
        fontSize:14,
        fontFamily:'Raleway-Bold',
        marginVertical:5,
        color:colors.text,
        
    },
    sublabel:{
        fontSize:12,
        fontFamily:'Raleway-Regular',
        color:colors.gray,
        marginVertical:5,
    }

    
})