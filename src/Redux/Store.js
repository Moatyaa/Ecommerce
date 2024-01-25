import { configureStore } from "@reduxjs/toolkit";
import { brandsReducer } from "./Brands";

export let store = configureStore({
    reducer : {
        brands: brandsReducer
    }
})

