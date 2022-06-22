import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateState, appStateReducerName } from './types';

const initialState: AppStateState = {
  appState: null,
  isConnected: false,
};

const appStateReducer = createSlice({
  name: appStateReducerName,
  initialState,
  reducers: {
    setAppState(state: AppStateState, action: PayloadAction<string | null>) {
      state.appState = action.payload;
    },
    setConnection(state: AppStateState, action: PayloadAction<boolean | null>) {
      state.isConnected = action.payload;
    },
  },
});

export default appStateReducer.reducer;
export const { setAppState, setConnection } = appStateReducer.actions;
