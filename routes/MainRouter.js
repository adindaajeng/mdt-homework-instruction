import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './../src/Screens/Home/Home';

const BottomStack = createBottomTabNavigator();

const MainRouter = () => {
  return (
    <BottomStack.Navigator screenOptions={{headerShown: false}}>
      <BottomStack.Screen name="Home" component={Home} />
    </BottomStack.Navigator>
  );
};

export default MainRouter;
