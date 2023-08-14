import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};
const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export default function TabsNavigator() {
  return (
    <TabsStack.Navigator screenOptions={{headerShown: false, title: ''}}>
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <TabsStack.Screen
        name="Cart"
        component={Example}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="basket" size={24} color="black" />
          ),
        }}
      />
      <TabsStack.Screen
        name="Payment"
        component={Example}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="payment" size={24} color="black" />
          ),
        }}
      />
      <TabsStack.Screen
        name="Profile"
        component={Example}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
    </TabsStack.Navigator>
  );
}
const Example = () => {
  return <View />;
};

const styles = StyleSheet.create({});
