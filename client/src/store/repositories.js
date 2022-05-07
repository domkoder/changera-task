import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get user repositories
export const getRepositories = createAsyncThunk(
  'repositories/get',
  async (reposUrl, thunkAPI) => {
    try {
      const response = await axios.get(`${reposUrl}`);

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  repositories: null,
  status: 'isIdle',
  message: '',
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducer: {
    filleterRepositories: (state, action) => {
      return state.filter(repository =>
        repository.name.toLowerCase().startsWith(action.payload.query) ||
        repository.name.toLowerCase().includes(action.payload.query)
          ? repository
          : null
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getRepositories.pending, state => {
        state.status = 'isLoading';
      })
      .addCase(getRepositories.fulfilled, (state, action) => {
        state.status = 'isSuccess';
        state.repositories = action.payload;
      })
      .addCase(getRepositories.rejected, (state, action) => {
        state.status = 'isError';
        state.message = action.payload;
      });
  },
});

export default repositoriesSlice.reducer;
