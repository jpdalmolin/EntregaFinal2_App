import { Button, Image, Text, View } from "react-native";
import {useDispatch, useSelector} from "react-redux";

import React from "react";
import { addToCart } from "../../store/actions/cart.action";
import { colors } from "../../constants/theme/colors";
import { styles } from "./styles";

const ProductDetail=({navigation})=>{
    const dispatch=useDispatch();
   const product=useSelector((state)=>state.products.selected) 
   
    const onAddToCart=()=>{
        dispatch(addToCart(product));
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.title}>{product?.description}</Text>
            <Text style={styles.title}>{product?.weight}</Text>
            <Text style={styles.title}>${product?.price}</Text>
            <Image style={styles.image} source={{uri:product?.image}}/>
           <Button 
            title="Add to Cart"
            onPress={onAddToCart}
            color={colors.primary}
           />
        </View>
    )

}

export default ProductDetail;