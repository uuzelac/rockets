import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rockets from '../features/rockets';
import CrewMembers from '../features/crewMembers/screens/crewMembers';
import CrewMemberDetails from '../features/crewMembers/screens/crewMemberDetails';
import * as screenOptions from './screenOptions';
import { HOME, ROCKETS, CREW_MEMBERS, CREW_MEMBER_DETAILS } from './routeNames';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROCKETS} component={Rockets} options={screenOptions.rockets} />
      <Tab.Screen name={CREW_MEMBERS} component={CrewMembers} options={screenOptions.crewMembers} />
    </Tab.Navigator>
  );
};

const Router = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME}>
          <Stack.Screen name={HOME} component={HomeTabs} options={screenOptions.home} />
          <Stack.Screen
            name={CREW_MEMBER_DETAILS}
            component={CrewMemberDetails}
            options={screenOptions.crewMemberDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
