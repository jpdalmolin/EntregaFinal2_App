import { StyleSheet } from 'react-native';
import { colors } from '../../constants/theme/colors';

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    minHeight: 370,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    marginVertical: 8,
  },
 
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptButton: {
    width: '100%',
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
    color: colors.text,
  },
  welcomeText:{
    marginVertical:0,
    marginBottom:50,
    fontSize: 25,
    fontFamily: 'Raleway-Bold',
    color:colors.primary,
  },
  secWelcomeText:{
    marginTop:0,
    fontSize: 18,
    fontFamily: 'Raleway-Light',
    color:colors.error,
  }
});