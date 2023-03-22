import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: colors.background,
      },
      keybordContainer: {
        flex: 1,
        keyboardVerticalOffset:10,
      },
      listContainer: {
        flex: 1,
        backgroundColor: colors.white,
      },
      footer: {
        backgroundColor: colors.white,
        borderTopColor: colors.primary,
        borderTopWidth: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
      buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
      },
      buttonConfirmText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Raleway-Medium',
      },
      totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      totalText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Raleway-Medium',
      },
      totalPrice: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'Raleway-Bold',
      },
      header:{
        flex: 1,
        marginVertical: 20,
        marginHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTitle: {
        fontFamily: 'Raleway-Medium',
        fontSize:18
      },
      textInput:{
        height:60,
        borderTopWidth: 0.1,
        fontFamily: 'Raleway-Bold',
        fontSize: 17,
        width: '100%',
      }
      
});