import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userDetails) => {
    console.log('===', userDetails);
    const response = await axios.post(
      'http://localhost:3002/user/login',
      userDetails
    );
    return response.data;
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (userToken) => {
    console.log('===', userToken);
    const response = await axios.post(
      'http://localhost:3002/user/current',
      userToken
    );
    return response.data;
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (userProfile) => {
    console.log('===', userProfile);

    const response = await axios.post(
      'http://localhost:3002/user/signup',
      userProfile
    );
    return response.data;
  }
);

const initialState = {
  user: [],
  status: 'idle',
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, action) => {
      const { token, ...rest } = action.payload;
      state.status = 'succeed';
      state.user = state.user.concat(rest);
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
    [getCurrentUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },
    [getCurrentUser.rejected]: (state, action) => {
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
