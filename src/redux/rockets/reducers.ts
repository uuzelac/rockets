import { createReducer } from '@reduxjs/toolkit';
import { fetchRockets } from './modules';
import { RocketsState } from './types';

const initialState: RocketsState = {
  item: null,
  isLoading: false,
};

const rocketsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchRockets.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchRockets.rejected, (state) => {
      state.isLoading = false;
    });
});

export default rocketsReducer;
