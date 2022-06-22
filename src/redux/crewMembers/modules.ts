import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import * as api from './api';
import CrewMember  from './models/CrewMember'

export const fetchCrewMembers = createAsyncThunk('crewMembers/getAll', async () => {
  try {
    const response = await api.getCrewMembersApi();
    return response.data.map((member: CrewMember) => new CrewMember(member));
  } catch (error) {
  }
});
