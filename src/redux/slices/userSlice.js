import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../../config/data/user";
export const userSlice=createSlice({
    name:'user',
    initialState:user,
    reducers:{
        addToCart:(state, action)=>{
            const {id, amount}=action.payload
            const purchaseProductIndex=state.purchased_products.findIndex(item=> item.id=== id);
            if(purchaseProductIndex > -1){
                state.purchased_products[purchaseProductIndex].amount+=amount
            }else{
                state.purchased_products.push({id:id, amount:amount})
            }      
        }
    }
})
export const {addToCart}=userSlice.actions
