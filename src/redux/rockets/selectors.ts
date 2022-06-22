import { Rocket } from './models';
import { RootReducerType } from '../../redux/types';

export const getAllRockets = (state: RootReducerType): null | Rocket[] => state.rockets.item;
export const isLoadingRockets = (state: RootReducerType): boolean => state.rockets.isLoading;
