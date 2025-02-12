import { createSlice } from "@reduxjs/toolkit";
import { cartList } from "../../../config/data/user";
export const cartSlice=createSlice({
    name:'cart',
    initialState:cartList,
    reducers:{
        addToCart:(cartState, action)=>{
            const {clientID , id, amount}=action.payload;
            const clientCartIndex=cartState.findIndex(item=> item.clientID === clientID);
            if(clientCartIndex === -1){
                cartState.push({
                    clientID:Number(clientID),
                    cart:[{id: id, amount: amount, checked: false}]
                })
            }else{
                const clientCart=cartState[clientCartIndex];
                const productInCartIndex=clientCart.cart.findIndex(item=> item.id === id);
                if(productInCartIndex === -1){
                    clientCart.cart.push({id: id, amount: amount, checked: false});
                    cartState[clientCartIndex]=clientCart;

                }else{
                    clientCart.cart[productInCartIndex].amount+= amount;
                    cartState[clientCartIndex]=clientCart;
                }      
            }
        },
        removeFromCart:(cartState, action)=>{
            const {clientID , id}=action.payload;
            const clientCartIndex=cartState.findIndex(item=> item.clientID === clientID);
            const updatedCart=cartState[clientCartIndex].cart.filter(item => item.id !== id);
            cartState[clientCartIndex].cart=updatedCart

        },
        checkItemInCart:(cartState, action)=>{
            const {clientID , id}=action.payload;
            const clientCartIndex=cartState.findIndex(item=> item.clientID === clientID);
            const updatedCart= cartState[clientCartIndex].cart.map(item=>{
                if(item.id=== id) return {...item,checked: !item.checked};
                return item;
            })
            cartState[clientCartIndex].cart=updatedCart
        },
        checkAllItemInCart:(cartState, action)=>{
            const {clientID , value}=action.payload;
            const clientCartIndex=cartState.findIndex(item=> item.clientID === clientID);
            const updatedCart= cartState[clientCartIndex].cart.map(item=>{
                return {...item,checked:value}
            })
            cartState[clientCartIndex].cart=updatedCart
        },
    }
})
export const {addToCart, removeFromCart, checkItemInCart, checkAllItemInCart}=cartSlice.actions
