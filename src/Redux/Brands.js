// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// let initialState = {brands: [], loading: false, isError: null}
// export let getBrands = createAsyncThunk("brands/get" , async ()=>{
//     let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
//     return data
// })

// let brandsSlice = createSlice({
//     name: 'brands',
//     initialState,
//     extraReducers: (bulider)=>{
//         bulider.addCase(getBrands.fulfilled, (state , action)=>{
//             state.brands = action.payload
//         })

//     }
// })

// export let brandsReducer = brandsSlice.reducer