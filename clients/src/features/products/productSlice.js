import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = productsAdapter.getInitialState({
  title: '',
  quantity: 0,
  price: 0,
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('/fakeApi/products');
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
      state.posts = state.posts.concat(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewProduct.fulfilled]: productsAdapter.addOne,
  },
});

export const { productAdded } = productSlice.actions;

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
