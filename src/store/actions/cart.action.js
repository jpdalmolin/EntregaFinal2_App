import { REALTIME_DATABASE_URL } from "../../constants/firebase";
import { cartTypes } from "../types";

const {ADD_TO_CART,CONFIRM_ORDER,REMOVE_FROM_CART}=cartTypes;

export const addToCart=(item)=>({
    type:ADD_TO_CART,
    item,
  
});

export const removeFromCart=(id)=>({
    type:REMOVE_FROM_CART,
    id,
})

export const confirmOrder=(items,total,email)=>{
    return async(dispatch)=>{
        try{
            const response=await fetch(`${REALTIME_DATABASE_URL}/orders.json`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                date:Date.now(),
                items,
                total,
                email,
              
            }),
        });
        const result=await response.json();
        
        dispatch({
            type:CONFIRM_ORDER,
            result
        });
    }   catch(error){
        
        dispatch({
            type:CONFIRM_ORDER,
            error,
        })
     }
    };
};