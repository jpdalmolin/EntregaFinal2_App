import { StyleSheet } from "react-native"
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical:10,
        height:160,
    },
    contentContainer:{
        flex:1,
        height:160,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.22,
        shadorRadius:2.22,
        elevation:3,
        padding:10,
    },
    title:{
        borderRadius:10,
        height:160,
        fontSize:18,
        fontFamily: 'Raleway-Medium',
        color:'black',
        marginTop:120,
        
        
    }
        
});

