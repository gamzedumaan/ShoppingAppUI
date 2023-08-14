import {StyleSheet, useColorScheme} from 'react-native';
import React, {useMemo} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
export default function App() {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: '#fff',
              text: '#fff',
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: '#f5f5f5',
              text: '#191919',
              border: '#D9D9D9',
              primary: '#191919',
            },
          },
    [colorScheme],
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
