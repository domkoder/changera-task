import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get user
export const getUser = createAsyncThunk('user/get', async (_, thunkAPI) => {
  try {
    const response = await await axios.get(`http://localhost:5000/api/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  currentUser: null,
  status: 'idle',
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.status = 'isLoading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'isSuccess';
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'isError';
        state.message = action.payload;
      });
  },
});

export default userSlice.reducer;
