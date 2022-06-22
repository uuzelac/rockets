import { createReducer } from '@reduxjs/toolkit';
import { fetchCrewMembers } from './modules';
import { CrewMembersState } from './types';

const initialState: CrewMembersState = {
  item: null,
  isLoading: false,
};

const crewMembersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCrewMembers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCrewMembers.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchCrewMembers.rejected, (state) => {
      state.isLoading = false;
    });
});

export default crewMembersReducer;
