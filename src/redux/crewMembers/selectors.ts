import CrewMember from './models/CrewMember';
import { RootReducerType } from '../../redux/types';

export const getAllCrewMembers = (state: RootReducerType): null | CrewMember[] =>
  state.crewMembers.item;

export const isLoadingCrewMembers = (state: RootReducerType): boolean =>
  state.crewMembers.isLoading;

export const getCrewMemberById = (state: RootReducerType, id: string): CrewMember | undefined =>
  state.crewMembers.item?.find((member) => member.id === id);
