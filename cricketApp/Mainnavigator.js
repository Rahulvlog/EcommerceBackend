import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import AppScreen from './screen/AppScreen';
import Home from './screen/Home';
import Login from './screen/Login';
import Profile from './screen/Profile';
import SignUp from './screen/SignUp';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const checkAuthentication = () => {
     
      const userIsLoggedIn = false;
      setIsLoggedIn(userIsLoggedIn);
    };

    checkAuthentication();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <>
           <Stack.Screen name="AppPage"  component={AppScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
