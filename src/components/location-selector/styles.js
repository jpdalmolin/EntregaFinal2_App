import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:20,
    },
    preview:{
        width:"100%",
        height:180,
        marginBottom:1,
        justifyContent: "center",
        alignContent: "center",
        borderColor:colors.primary,
        borderWidth:0.5,
        paddingBottom:2,
    },
    text:{
        marginLeft:100,

    },
    
});