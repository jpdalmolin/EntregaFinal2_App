import { authTypes } from "../types";
import { orderTypes } from "../types/order.types";

const {SIGN_UP,SIGN_IN}=authTypes;

const {GET_ORDERS,DELETE_ORDER}=orderTypes;


const initialState = {
    list:[],
    
};

const ordersReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                list:action.orders,
                
            };
            case DELETE_ORDER:
                return {
                    ...state,
                    list: state.list.filter((order)=>orderTypes.id !== action.id),
                    
                }
                default:
                    return state;
    }
}
export default ordersReducer;