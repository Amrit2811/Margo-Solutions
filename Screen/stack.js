import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, useTheme } from 'react-native-paper';
import { Image } from 'react-native';

import { FeedScreen } from './feed';
import { AttitudeScreen } from './attitude';
import { StepEventScreen } from './stepEvent';
import { HeadingDirectionScreen } from './headingDirection';
import { StepLengthScreen } from './stepLenght';
import { LocationScreen } from './location';

 const Stack = createStackNavigator();
export function StackNavigator() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
      >
        {Object.entries(StackScreen).map(([rootName, params], idx) => (
          <Stack.Screen key={idx} name={rootName} {...params} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const StackScreen = {
  Feed: { component: FeedScreen, options: { headerTitle: 'Feed' } },
  Attitude: {
    component: AttitudeScreen,
    options: { headerTitle: 'Attitude Estimation' },
  },
  StepEvent: {
    component: StepEventScreen,
    options: { headerTitle: 'Step Event Detection' },
  },
  HeadingDirection: {
    component: HeadingDirectionScreen,
    options: { headerTitle: 'Heading Direction Estimation' },
  },
  StepLength: {
    component: StepLengthScreen,
    options: { headerTitle: 'Step Length Estimation' },
  },
  Location: {
    component: LocationScreen,
    options: { headerTitle: 'Location Estimation' },
  },
};
