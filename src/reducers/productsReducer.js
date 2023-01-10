import { createSlice } from "@reduxjs/toolkit";

let  index = 0;

const initialState = [
    {
        id : ++index,
        name :'Apple',
        amount:3
    }
];
const products = createSlice({
    name:'products',
    initialState:initialState,
    reducers:{
        productAdded:(products,action)=>{
            // console.log("Hee",action.payload.product)
            products.push(action.payload.product)
        },
        productRemove:(products,action)=>{
            return products.filter((product)=>product.id !== action.payload.id)
        },
        productsAdded:(products,action)=>{
            action.payload.products.forEach(product => {
                products.push(product);
            }).bind(products);
        }
    }
})
export const {productAdded,productRemove,productsAdded} = products.actions;
export const productsSelect = (state)=>state.products;
export default products.reducer