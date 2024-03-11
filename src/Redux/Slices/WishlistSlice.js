import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE =[]

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:INITIAL_STATE,
    reducers:{
        //action
        addToWishlist:(state,action)=>{
            console.log('wishlist data is ',action.payload);
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            //NOT THE RECOMMENDED WAY BECAUSE IT MUTATES THE ORIGINAL ARRAY...
            // const index = state.findIndex(product => product.id === action.payload.id);
            // if (index !== -1) {
            //     state.splice(index, 1);
            // }
           return state.filter((product)=>product.id !== action.payload.id)

        },
        clearWishlist:(state,action)=>{
            return []
        
        }

    }
})

export const {addToWishlist,removeFromWishlist,clearWishlist} =wishlistSlice.actions 
export default wishlistSlice.reducer