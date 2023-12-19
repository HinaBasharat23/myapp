import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState={
    carts: []
}
const cartSlice = createSlice ({
    name:`cart`,
    initialState,
    reducers:{
        add(state,action){
            const indexnumber = state.carts.findindex((item)=> item.id === action.payload.id)
            if(indexnumber >=0){
                state.carts[indexnumber].qty +=1;
        }else {
            const newentry = {...action.payload, qty:1}
            state.carts= [...state.carts,newentry];
        }

            

            // state.push(action.payload)
        }
    }
})  
export const {add}=cartSlice.actions;

export default cartSlice.reducer;
