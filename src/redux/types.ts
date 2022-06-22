import { CrewMembersState, crewMembersReducerName } from '../redux/crewMembers/types';
import { RocketsState, rocketsReducerName } from '../redux/rockets/types';
import { AppStateState, appStateReducerName } from '../redux/appState/types';

export interface RootReducerType {
    [rocketsReducerName]: RocketsState;
    [crewMembersReducerName]: CrewMembersState;
    [appStateReducerName]: AppStateState;
  }