import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CategoryItem } from "../../components";
import React from "react";
import {selectCategory} from '../../store/actions'
import { styles } from "./styles";

const Categories=({navigation})=>{
    const dispatch = useDispatch();
    const categories=useSelector((state)=>state.category.categories)
    const onSelected=(item)=>{
        dispatch(selectCategory(item.id))
        navigation.navigate('Products',{
            title:item.title,
        });
    };
    const renderItem=({item})=> <CategoryItem item={item} onSelected={onSelected} />;
    
    const keyExtractor=(item)=>item.id.toString();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.containerList}
            />
            
        </SafeAreaView>
    )

}

export default Categories;