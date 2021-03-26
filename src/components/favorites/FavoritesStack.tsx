import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{title: 'Favorites'}}
      />
    </Stack.Navigator>
  );
};

FavoritesStack.propTypes = {};

export default FavoritesStack;
