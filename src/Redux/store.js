import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from "./Slices/WishlistSlice";
import CartSlice from "./Slices/CartSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:WishlistSlice,
        cart:CartSlice
        // better to give the name as wishlist instead of wishlistReducer . (standard way)

    }
})
export default store