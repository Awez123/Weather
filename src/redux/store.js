import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo"
import ipLookupReducer from "./slice/ipLookup";
import astroReducer from "./slice/astro";

export const store = configureStore({
    reducer:
    // rootReducer
    {
        todo:todoReducer,
        iplookup:ipLookupReducer,
        astro:astroReducer,
    },
},+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())