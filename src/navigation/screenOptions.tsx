import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { faRocket, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as screenTitles from './screenTitles';
import * as colors from '../theme/colors';

export const home: NativeStackNavigationOptions = { headerShown: false };

export const crewMemberDetails: NativeStackNavigationOptions = { headerShown: false };

export const rockets: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: screenTitles.ROCKETS,
  tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faRocket} size={size} color={color} />,
  tabBarActiveTintColor: colors.black,
};

export const crewMembers: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: screenTitles.CREW_MEMBERS,
  tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faPeopleGroup} size={size} color={color} />,
  tabBarActiveTintColor: colors.black,
};
