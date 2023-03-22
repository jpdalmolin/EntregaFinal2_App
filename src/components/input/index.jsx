import {Text, TextInput, View} from 'react-native';

import Label from '../label';
import {styles} from './styles';

const Input =({
    editable,
    children,
    value,
    style,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor=colors.gray,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) =>{
    return (
        <View style={styles.container}>
            <Label {...props}>
                <TextInput
                {...props}
                editable={editable}
                value={value}
                style={{...styles.input, ...style}}
                onChangeText={onChangeText}
                onFocus={onFocus}
                maxLength={maxLength}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                
                />
                </Label>
            {
                hasError && touched && (
                    <View style={styles.message}>

                        <Text style={styles.helperText}>{error}</Text>
                        
                        
                    </View>
                )
            }
        

        </View>
    )
}

export default Input;