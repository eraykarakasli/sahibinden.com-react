import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetail: [],
};


const getProductSlice= createSlice({
    name:"products",
    initialState,
    reducers: {},
})
