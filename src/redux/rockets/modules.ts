import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import * as api from './api';
import { Rocket } from './models';

export const fetchRockets = createAsyncThunk('rockets/getAll', async () => {
  try {
    const response = await api.getRocketsApi();
    return response.data.map((rocket: Rocket) => new Rocket(rocket));
  } catch (error) {}
});
