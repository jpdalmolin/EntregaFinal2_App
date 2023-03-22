import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const ProductItem =({item,onSelected})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.contentContainer}
                onPress={()=>onSelected(item)}
                >
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.weight}>{item.weight}</Text>
                    </View>
                </TouchableOpacity>

        </View>
    )
}
export default ProductItem;