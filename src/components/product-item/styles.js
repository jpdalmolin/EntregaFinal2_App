import { StyleSheet } from "react-native"
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical:10,
        height:120,
        padding:10,
        backgroundColor:colors.primary,
        borderRadius:10,
        width:'90%',
    },
    contentContainer:{
        flex:1,
        
        justifyContent: 'space-around',
        
    },
    title:{
        
       
        fontSize:18,
        fontFamily: 'Raleway-Light',
        color:'white'
        
        
    },
    detailsContainer:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    price:{
        flexDirection:'row',
        fontSize:14,
        color:'white'
    },
    weight:{
        fontSize:14,
        color:'white'
    }
});

