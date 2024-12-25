import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Main } from './Screen/main';
//import { AnimatedAppLoader } from './Screen/splash';

export default function App() {
  return (
    <SafeAreaProvider>
        <Main />
    </SafeAreaProvider>
  );
}
