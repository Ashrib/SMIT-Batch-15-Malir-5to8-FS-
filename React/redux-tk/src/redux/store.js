import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.js'
import productsReducer from './products/productSlice.js'

export const store = configureStore({
    reducer: {
        count: counterReducer,
        products: productsReducer,
    }
})