import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/Home';
import ViewAll from '../Screens/ViewAll';
import AstroDetails from '../Screens/AstroDetails';
import ConnectNow from '../Screens/ConnectNow';
import BookingConfirmation from '../Screens/BookingConfirmation';
import StartScreen from '../Screens/StartScreen';
import Account from '../TabScreen/Account';
import Shop from '../TabScreen/Shop';
import Daily from '../TabScreen/Daily';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      tabBarOptions={{activeTintColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={30}
              color="orange"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={30}
              color="orange"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={30}
              color="orange"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Daily"
        component={Daily}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="newspaper" size={30} color="orange" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SignIn}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="ConnectNow" component={ConnectNow} />
        <Stack.Screen name="AstroDetails" component={AstroDetails} />
        <Stack.Screen
          name="BookingConfirmation"
          component={BookingConfirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
