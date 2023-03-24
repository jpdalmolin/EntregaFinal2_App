import { Button, FlatList, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    const [reEmail,reSetEmail]=useState('');
    const [isEditable,setIsEditable]=useState(true);

    const updateState = () => {
      
      setIsEditable(!isEditable);
    };

  const onHandlerConfirm=(t) =>{
    setEmail(t);
    
  }
  const onHandlerReConfirm=(t) =>{
    reSetEmail(t); 
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
          <TouchableOpacity style={styles.buttonConfirm} onPress={onCreateOrder}>
            <Text  style={styles.buttonConfirmText}>Confirm</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>     Total:</Text>
              <Text style={styles.totalPrice}>$ {total}</Text>
            </View>
          </TouchableOpacity>
        </View>
  )

  const Emails=()=>
  cart.length > 0 &&(
    <View style={styles.textContainerInput}>
    <TextInput style={styles.textInput}
            id='emailV'
            name='email'
            type="text"
            onChangeText={onHandlerConfirm}
            placeholder='Enter email for post-order contact'
            value={email}
            editable={isEditable}
                        
        />
        <TextInput style={styles.textReInput}
            id='reEmail'
            name='reEmail'
            type="text"
            onChangeText={onHandlerReConfirm}
            placeholder='Confirm email for post-order contact'
            value={reEmail}
            editable={isEditable}       
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
      )

    return (
      
      <KeyboardAvoidingView
      style={styles.keybordContainer}
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      enabled>
        
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
        
        <Emails/>
             
              
              
        <Footer/>
        
      </View>
      
      </KeyboardAvoidingView>
      
    );
};

export default Cart;