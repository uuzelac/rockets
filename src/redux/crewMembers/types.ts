import CrewMember from './models/CrewMember';

export interface CrewMembersState {
  item: null | CrewMember[];
  isLoading: boolean;
}

export const crewMembersReducerName = 'crewMembers';
