import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Detail } from './Detail';
import { HomeScreen } from './Home';

// Disable type checking for navigation params
type RootStackParamList = Record<string, any>;
declare global {
  namespace ReactNavigation {
    /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
    interface RootParamList extends RootStackParamList {}
  }
}

const BaseStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BaseStack.Navigator screenOptions={{ headerShown: false }}>
        <BaseStack.Screen name="Home" component={HomeScreen} />
        <BaseStack.Screen
          name="Detail"
          component={Detail}
          options={{ animation: 'none' }}
        />
      </BaseStack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
