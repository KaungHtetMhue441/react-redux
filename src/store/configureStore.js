import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import delayedActionMiddleware from  './middleware'
export default function(){
    return configureStore(
        {
            reducer:rootReducer,
            middleware:[
                delayedActionMiddleware
            ]
        },
        devToolsEnhancer({
            trace:true
        })
    )
}