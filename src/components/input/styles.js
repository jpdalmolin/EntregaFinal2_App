import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    input: {
        
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Raleway-Regular',
        marginBottom: 10,
      },
      message:{
        marginVertical:5,
      },
      helperText:{
        fontSize:12,
        fontFamily: 'Raleway-Regular',
        color: colors.error,
      }
})