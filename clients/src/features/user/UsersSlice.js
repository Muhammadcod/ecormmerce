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

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (userProfile) => {
    console.log('===', userProfile);

    const response = await axios.post(
      'http://localhost:3002/signup',
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
  },
});

export const { addUser } = usersSlice.actions;

export const selectUserStatus = (state) => state.users.status;

/*export const selectAllProducts = (state) => state.products.products;

export const selectProductStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;*/

export default usersSlice.reducer;
