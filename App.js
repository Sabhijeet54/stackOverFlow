
import React from 'react';
import AppNavigator from './src/Navigation';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
console.disableYellowBox = true;

const App = () => {
  return <AppNavigator />;
};

export default App;
