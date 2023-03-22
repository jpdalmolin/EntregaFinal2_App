import {applyMiddleware, combineReducers, createStore} from "redux";
import { authReducer, cartReducer, categoryReducer, ordersReducer, productReducer } from "./reducers";

import { configureStore } from '@reduxjs/toolkit'
import placeReducer from "./place.slice"
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    products:productReducer,
    category:categoryReducer,
    cart:cartReducer,
    orders:ordersReducer,
    auth:authReducer,
    place:placeReducer,
});


  


export const store = configureStore({
    reducer: {
      place: placeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  export default createStore(rootReducer,applyMiddleware(thunk));