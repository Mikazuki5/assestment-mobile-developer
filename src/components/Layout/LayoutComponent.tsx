import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LayoutComponent = ({children}: {children: React.ReactNode}) => {
  const inset = useSafeAreaInsets();
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <View style={[styles.LayoutContainer, Platform.OS === 'ios' && {paddingTop: inset.top}]}>
        {children}
      </View>
    </>
  );
};

export default LayoutComponent;

export const styles = StyleSheet.create({
  LayoutContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
