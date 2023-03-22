import { FlatList, Text, View } from 'react-native';
import { deleteOrder, getOrders } from '../../store/actions';
import { useCallback, useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';

import OrderItem from '../../components/order-item';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Orders = ({ navigation }) => {
  const dispatch=useDispatch();
  const orders=useSelector((state) => state.orders.list);
  
  const onDelete = (id) => {
    dispatch(deleteOrder(id));
    
  };

  useFocusEffect(
    useCallback(()=>{
    dispatch(getOrders());


  },[dispatch]));

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <Text>Orders</Text>
      <FlatList  data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;