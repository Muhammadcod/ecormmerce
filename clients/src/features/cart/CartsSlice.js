import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

const cartsAdapter = createEntityAdapter({
  selectId: (products) => products._id,
});

export const fetchUserCartItems = createAsyncThunk(
  'Carts/fetchCarts',
  async (user) => {
    const response = await axios.get(
      `http://localhost:3002/carts/cart?id=${user}`
    );
    return response.data.products;
  }
);

export const addCartItem = createAsyncThunk(
  'cart/addToCart',
  async (product) => {
    const response = await axios.post(
      'http://localhost:3002/carts/add-to-cart',
      product
    );

    return response.data.products;
  }
);

const initialState = cartsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserCartItems.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUserCartItems.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(fetchUserCartItems.fulfilled, (state, action) => {
      cartsAdapter.upsertMany(state, action.payload);
      state.status = 'succeed';
    });
    builder.addCase(addCartItem.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(addCartItem.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(addCartItem.fulfilled, (state, action) => {
      state.status = 'succeed';
      cartsAdapter.upsertMany(state, action.payload);
    });
  },
});

export const { addToCart } = cartsSlice.actions;

// export const selectCartItems = (state) => state.carts.entities;
// export const selectCartStatus = (state) => state.carts.status;
export const {
  selectById: selectUserById,
  selectIds: selectItemsIds,
  selectEntities: selectCartEntities,
  selectAll: selectAllItems,
  selectTotal: selectTotalUsers,
} = cartsAdapter.getSelectors((state) => state.carts);

export default cartsSlice.reducer;
