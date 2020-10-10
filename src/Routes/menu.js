import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import Cardapio from '../Screens/Cardapio';

const Stack = createStackNavigator();

const MenuRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cardapio" component={Cardapio}/>
    </Stack.Navigator>
  );
};

export default MenuRoutes;
