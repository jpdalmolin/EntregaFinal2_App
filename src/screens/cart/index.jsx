import { Button, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { confirmOrder, removeFromCart } from '../../store/actions';
import{useDispatch, useSelector} from 'react-redux';

import CartItem from '../../components/cart-item';
import { styles } from './styles';
import { useState } from 'react';

const Cart=({navigation}) =>{
  

    const dispatch = useDispatch();
    const cart=useSelector((state)=>state.cart.items);
    const total=useSelector((state)=>state.cart.total);
    const [email,setEmail]=useState('');
    const [emails,setEmails]=useState('');
    const [isEditable,setIsEditable]=useState(true);
    const[disable,setDisabled]=useState(false);
    const updateState = () => {
      
      setIsEditable(!isEditable);
      
    };

    const onHandlerConfirm=(t) =>{
      setEmail(t);
    }
   

    const onDelete = (id) => {
        dispatch(removeFromCart(id));
    };
    const onCreateOrder=()=>{
        dispatch(confirmOrder(cart,total,email));
    };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();

  const Header=()=>cart.length <=0 && (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart is empty</Text>

    </View>
  )
  const Footer=()=>
    cart.length > 0 &&(

        <View style={styles.footer}>
          
          <TouchableOpacity style={styles.buttonConfirm} disabled={isEditable}  onPress={onCreateOrder}>
            <Text  style={styles.buttonConfirmText} >Confirm</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>     Total:</Text>
              <Text style={styles.totalPrice}>$ {total}</Text>
            </View>
          </TouchableOpacity>
        </View>
  )

  
    return (
      
      <KeyboardAvoidingView
      style={styles.keybordContainer}
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      enabled
      keyboardVerticalOffset={Platform.select({ios: 0, android: 200})}>
        
        
        <View style={styles.container}>
        
        <View style={styles.listContainer}>
        <Header/>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.listContainer}
            
          />
        </View>


        {cart.length > 0 &&(
        <View style={styles.textContainerInput}>
          
        <TextInput style={styles.textInput} 
            id='emailV'
            
            name='email'
            type="text"
            onChangeText={onHandlerConfirm}
            placeholder='Enter email for post-order contact'
            value={email}
            editable={isEditable}
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete='off'
            
        /> 
        <Button
          title={
            isEditable
              ? 'Confirm Email'
              : 'Change Email'
          }   
              onPress={updateState}
        />       
        
        </View>
        )}
           
              
        <Footer/>
        
      </View>
      
      </KeyboardAvoidingView>
      
    );
};

export default Cart;