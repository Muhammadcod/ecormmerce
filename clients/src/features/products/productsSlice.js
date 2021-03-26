import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = {
  title: '',
  quantity: 0,
  price: 0,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:3002/api/products');
    console.log('==', response);
    return response.products;
  }
);

export const addNewProduct = createAsyncThunk(
  'product/addProduct',
  async (initialProduct) => {
    const response = await axios.post('http://localhost:3002/api/products', {
      product: initialProduct,
    });
    return response.product;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.products = state.products.concat(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewProduct.fulfilled]: productsAdapter.addOne,
  },
});

export const { productAdded } = productSlice.actions;

export const selectAllProducts = (state) => state.products;

export const selectProductStatus = (state) => state.products.status;

export default productSlice.reducer;
