import CrewMember from './models/CrewMember';
import { RootReducerType } from '../../redux/types';

export const getAllCrewMembers = (state: RootReducerType): null | CrewMember[] => state.crewMembers.item;
export const isLoadingCrewMembers = (state: RootReducerType): boolean => state.crewMembers.isLoading;
