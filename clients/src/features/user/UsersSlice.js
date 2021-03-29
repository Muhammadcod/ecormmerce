import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchProducts } from '../products/productsSlice';

export const fetchUsers = createAsyncThunk('Users/fetchUsers', async () => {
  const response = await axios.get('http://localhost:3002/users');
  return response.data;
});

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (userProfile) => {
    console.log('===', userProfile);
    const response = await axios.post('http://localhost:3002/signup', {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  [fetchUsers.pending]: (state, action) => {
    state.status = 'loading';
  },
  [fetchUsers.fulfilled]: (state, action) => {
    state.status = 'succeeded';
    // Add any fetched products to the array
    state.products = state.products.concat(action.payload);
  },
  [fetchUsers.rejected]: (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
  },
  /*extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched products to the array
      state.email = action.payload.user.email;
      state.username = action.payload.user.name;
      return state;
    },
    [signUpUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },*/
});

export const { addUser } = usersSlice.actions;

export const selectUserStatus = (state) => state.users.status;

/*export const selectAllProducts = (state) => state.products.products;

export const selectProductStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;*/

export default usersSlice.reducer;
