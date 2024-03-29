import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            console.log('remove cart action payload is ',action.payload);
            return state.filter((item)=>item.id !==action.payload.id)
        },
        clearCart:(state)=>{
            return []
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer