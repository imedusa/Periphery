import React, {createContext, useEffect, useReducer, useState} from 'react'
import Items from './Items'
import {Scrollbars} from 'react-custom-scrollbars-2'
import arrow from "../../images/arrow.png"
import cart from "../../images/cart.png"
import dummy from "../../images/dummy.jpg"
import './Cart.css'
import {products} from "./products"
import ContextCart from './ContextCart'
import { reducer } from './reducer'

const initialState = {
    item: products, 
    totalAmount: 0,
    totalItem: 0,
}

export const CartContext = createContext();

const Cart = () => {

    // const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (album_id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: album_id,
        })
    }

    // const clearCart = () => {
    //     return dispatch({
    //         type: "CLEAR_CART"
    //     })
    // }
    const increment = (album_id) =>{
        return dispatch({
            type:"INCREMENT",
            payload: album_id,
        })
    }

    const decrement = (album_id) =>{
        return dispatch({
            type:"DECREMENT",
            payload: album_id,
        })
    }
    useEffect(() => {
        dispatch ({type: "GET_TOTAL"})
    }, [state.item]);


    const name = products?.album_name ?? "";
    const coverImg = products?.img_url ?? "";
    const singer = products?.artist ?? "";
    const price = products?.price ?? "";


  return (
      <>
      <CartContext.Provider value = {{...state, removeItem, increment, decrement}}>
          <ContextCart/>
      </CartContext.Provider>
      </>
    
  )
}

export default Cart