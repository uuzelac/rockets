import { combineReducers } from 'redux';
import RocketsReducer from './rockets/reducers';
import CrewMembersReducer from './crewMembers/reducers';
import AppStateReducer from './appState/reducers';
import { crewMembersReducerName } from '../redux/crewMembers/types';
import { rocketsReducerName } from '../redux/rockets/types';
import { appStateReducerName } from '../redux/appState/types';

export default combineReducers({
  [rocketsReducerName]: RocketsReducer,
  [crewMembersReducerName]: CrewMembersReducer,
  [appStateReducerName]: AppStateReducer,
});
