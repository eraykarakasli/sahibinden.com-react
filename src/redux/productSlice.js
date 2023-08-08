import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  productDetail: [],
};

export const getProducts = createAsyncThunk("getproducts", async()=>{
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
})

const productSlice= createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getProducts.fulfilled, (state, action) => {
        (state.products= action.payload)
      })
    }
})

export default productSlice.reducer


