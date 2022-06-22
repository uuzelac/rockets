import { RootReducerType } from '../../redux/types';

export const getAppState = (state: RootReducerType): string | null => state.appState.appState;
export const isConnected = (state: RootReducerType): boolean | null => state.appState.isConnected;
