import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarts = createAsyncThunk('Carts/fetchCarts', async () => {
  const response = await axios.get('http://localhost:3002/api/carts');
  return response.data;
});

const cartsAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = cartsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

/* e

export const addNewProduct = createAsyncThunk(
  'product/addProduct',
  async (initialProduct) => {
    console.log('===', initialProduct);
    const response = await axios.post(
      'http://localhost:3002/api/products',
      initialProduct
    );
    return response.data;
  }
); */

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: cartsAdapter.addOne,
  },
  /*extraReducers: {
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
    [addNewProduct.fulfilled]: (state, action) => {
      // We can directly add the new post object to our posts array
      state.products.push(action.payload);
    },
  },*/
});

export const {} = cartsSlice.actions;

/*export const selectAllProducts = (state) => state.products.products;

export const selectProductStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;*/

export default cartsSlice.reducer;
