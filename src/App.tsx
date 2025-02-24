import RootStackNavigation from 'navigators/RootNavigations';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <RootStackNavigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
