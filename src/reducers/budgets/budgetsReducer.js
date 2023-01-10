import { createSlice } from "@reduxjs/toolkit";
import { fetchBudgets } from "./budgetsAPi";
import { createAsyncThunk } from "@reduxjs/toolkit";
// export const getBudgetsAsync = async()=>{
//       const response = await fetchBudgets();
//       console.log('response',response);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;
    
// }
fetchBudgets()
const initialState =[
    
]
// let data = getBudgetsAsync();
// console.log('data',data);
const budgetsSlice = createSlice({
    name:"budgets",
    initialState,
    reducers:{
        addBudget:(budgets,action)=>{
            return 
        }
    },

})

export const budgetsReducer = budgetsSlice.reducer;
export const actions = budgetsSlice.actions;
export const budgetsSelecter = (state)=>state.budgets;