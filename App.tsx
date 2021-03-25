import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import CoinsStack from './src/components/coins/CoinsStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
};

export default App;
