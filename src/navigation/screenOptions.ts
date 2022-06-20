import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import * as screenTitles from './screenTitles';

export const home: NativeStackNavigationOptions = { headerShown: false };

export const crewMemberDetails: NativeStackNavigationOptions = { headerShown: false };

export const rockets: BottomTabNavigationOptions = { headerShown: false };

export const crewMembers: BottomTabNavigationOptions = { headerShown: false };

// export const tabNavigatorOptions = ({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'ios-list-box' : 'ios-list';
//     }

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'gray',
// });
