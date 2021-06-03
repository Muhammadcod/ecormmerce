import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:3002/api/products');
    return response.data;
  }
);

export const addNewProduct = createAsyncThunk(
  'product/addProduct',

  async (initialProduct) => {
    const response = await axios.post(
      'http://localhost:3002/api/create',
      initialProduct
    );

    // console.log('===', response.data);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched products to the array
      state.products = state.products.concat(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewProduct.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addNewProduct.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },
    [addNewProduct.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

// export const {} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectProductStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;

export default productsSlice.reducer;
