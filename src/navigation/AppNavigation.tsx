import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Home} from '../screens/Home';
import {Colors} from '../theme/colors';
import {Details} from '../screens/Details';

export interface GenericNavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

interface AppNavigationProps {}

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primaryCTA},
          headerTintColor: Colors.white,
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen name="Search" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
