import { configureStore } from "@reduxjs/toolkit"
import ProductsSlice from "./slices/ProductsSlice"
export const store=configureStore({
    reducer:{
        product:ProductsSlice,    
    }
})