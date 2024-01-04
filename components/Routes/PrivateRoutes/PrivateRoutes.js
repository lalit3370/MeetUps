import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/Home';

const Stack = createNativeStackNavigator();

function PrivateRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default PrivateRoutes;
