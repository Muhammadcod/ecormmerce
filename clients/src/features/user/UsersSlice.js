import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userDetails) => {
    console.log('===', userDetails);
    const response = await axios.post(
      'http://localhost:3002/login',
      userDetails
    );
    return response.data;
  }
);

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
    const response = await axios.post(
      'http://localhost:3002/signup',
      userProfile
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [signUpUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },
    [signUpUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { addUser } = usersSlice.actions;

export const selectUserStatus = (state) => state.users.status;

/*export const selectAllProducts = (state) => state.products.products;

export const selectProductStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;*/

export default usersSlice.reducer;
