import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FormScreen from './screens/FormScreen';
import LoginScreen from './screens/LoginScreen';
import DeviceInfoScreen from './screens/DeviceInfoScreen';
import CadScreen from './screens/CadScreen';
import LocuScreen from './screens/LocuScreen';
import LocutoresScreen from './screens/LocutoresScreen';

const Stack = createStackNavigator();

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        {/* {isLoggedIn ? (
          <> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen name="DeviceInfoScreen" component={DeviceInfoScreen} />
        <Stack.Screen name="Cadastrar" component={CadScreen} />
        <Stack.Screen name="LocuScreen" component={LocuScreen} />
        <Stack.Screen name="LocutoresScreen" component={LocutoresScreen} />


        {/* </>
        ) : ( */}
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
        >
          {props => <LoginScreen {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
