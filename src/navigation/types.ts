import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ROUTES from './routeNames';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.ROCKETS]: undefined;
  [ROUTES.CREW_MEMBERS]: undefined;
  [ROUTES.CREW_MEMBER_DETAILS]: { id: string };
};

export type NavProps = NativeStackScreenProps<RootStackParamList, 'HOME'>;
