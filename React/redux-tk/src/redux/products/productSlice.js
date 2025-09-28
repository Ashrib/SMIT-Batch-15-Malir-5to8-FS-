import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       addProduct: (state,action)=>{
        console.log(action.payload)
        // products.push(action.payload)
        state.value = [...state.value, action.payload];
       },
       newData: (state,action)=>{
        state.value = [...action.payload]
       },
       deleteProduct: (state,action)=>{
        /// deleteDoc(action.payload) //id
        state.value = state.value.filter((obj)=> obj.id !== action.payload )//id
       }
    },
})

export const {addProduct, newData } = productSlice.actions;

export default productSlice.reducer;