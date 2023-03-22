import { AddItem, Card, CustomModal, Header, TaskList, TextContainer } from './components';
import { Button, Text, View } from 'react-native';
import { Buyscreen, HomeScreen } from './screens';
import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import { colors } from './constants/theme/colors';
import {init} from "./db";
import store from './store';
import { styles } from './styles';
import {useFonts} from 'expo-font';

init()
  .then(()=>{
    console.log("Initialized database")
  })
  .catch((err)=>{
    console.log("Initializing db Failed.");
    console.log(err);
})
const App = () => {
  const[userText,setUserText] =useState(null)
  const[loaded]=useFonts({
  'Raleway-Bold':require('../assets/fonts/Raleway-Bold.ttf'),
  'Raleway-Regular':require('../assets/fonts/Raleway-Regular.ttf'),
  'Raleway-Medium':require('../assets/fonts/Raleway-Medium.ttf'),
  'Raleway-Light':require('../assets/fonts/Raleway-Light.ttf'),
  });
  const onHandleBuy=(selectedBuy) => {
    setUserText(selectedBuy);
  };


  const Content=()=> userText ? <Buyscreen selectedBuy={userText}/>: <HomeScreen onHandleBuy={onHandleBuy} />;

if(!loaded) {
  return(
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.primary}/>
    </View>
  );
  }


  return (
    
      <Provider store={store}>
          <AppNavigator/>
      </Provider>
  );
}
export default App;