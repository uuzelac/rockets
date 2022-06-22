import Rocket from './models/Rocket';

export interface RocketsState {
  item: null | Rocket[];
  isLoading: boolean;
}

export const rocketsReducerName = 'rockets';
