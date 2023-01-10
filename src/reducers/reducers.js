import productsReducer from './productsReducer'
import { combineReducers } from '@reduxjs/toolkit'
import { budgetsReducer } from './budgets/budgetsReducer';
const rootReducer = combineReducers({
                    products:productsReducer,
                    budgets:budgetsReducer
                });
export default rootReducer;
