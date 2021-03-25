import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './../coinDetail/CoinDetailScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Coins"
        component={CoinsScreen}
        options={{title: 'Coins'}}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
        options={{title: 'Coin detail'}}
      />
    </Stack.Navigator>
  );
};

export default CoinsStack;
