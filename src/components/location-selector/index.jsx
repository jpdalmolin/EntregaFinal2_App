import * as Location from "expo-location";

import {Alert, Button, Text, View} from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";

import MapPreview from "../map-preview";
import { colors } from '../../constants/theme/colors'
import { styles } from './styles'

const LocationSelector=({onLocation})=>{
    const navigation=useNavigation();
    const route=useRoute();

    const {mapLocation}=route.params||{};
    const [pickedLocation,setPickedLocation] = useState(null)
    const verifyPermissions=async()=>{
        const {status}= await Location.requestForegroundPermissionsAsync();
        if(status!=="granted"){
        Alert.alert("You don't have permission to access this location")
        return false;
        }
        return true;
    }
    const onHandleGetLocation=async(isMaps=false)=>{
        const isLocationPermission = await verifyPermissions();
        if(!isLocationPermission) return;
        
        const location = await Location.getCurrentPositionAsync({
            timeout:5000,
        })

        const {latitude,longitude} = location.coords;

        setPickedLocation({lat:latitude, lng:longitude});
        onLocation({lat:latitude, lng:longitude});
        if(isMaps){
            navigation.navigate("Maps",{coords:{lat:latitude,lng:longitude}})
        }
    };

    const onHandlerMapsLocation=async()=>{
        await onHandleGetLocation(true);
        
        
    }

    useEffect(()=>{
        if(mapLocation){
            setPickedLocation(mapLocation);
            onLocation(mapLocation);
        }
    },[mapLocation]);

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                <MapPreview location={pickedLocation} style={styles.preview}>
                <Text  style={styles.text}>No Selected Location</Text>
                </MapPreview>
            </View>
            <Button 
            title="Select Location"
            onPress={onHandleGetLocation}
            color={colors.primary}
            />
            <Button 
            title="Select Location From Map"
            onPress={onHandlerMapsLocation}
            color={colors.secondary}
            />
            </View>
    )
}

export default LocationSelector;