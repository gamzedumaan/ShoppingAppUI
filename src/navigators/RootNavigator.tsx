import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import TabsNavigator, {TabsStackParamList} from './TabsNavigator';

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  Details: {
    id: string;
  };
};
const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="TabsStack" component={TabsNavigator} />
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({});
