import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import * as actions from '../store/actions'
import { createStackNavigator } from "@react-navigation/stack";
import { stackScreenOptions } from "./options/stack";
import LogIn from "../containers/Screens/Auth/LogIn";
import Register from "../containers/Screens/Auth/Register";
import ResetPassword from "../containers/Screens/Auth/ResetPassword";
import TabScreens from './Tab'

export type RootStackParamList = {
    LogIn: undefined,
    Register: undefined,
    ResetPassword: undefined,
    Tab: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const StackScreens = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.token !== null);

  useEffect(() => {
    dispatch(actions.checkAuthState());
  }, []);

  return (
    <React.Fragment>
      <Stack.Navigator screenOptions={stackScreenOptions}>
          {
            isAuthenticated
            ? (
              <Stack.Screen
                name="Tab"
                component={TabScreens}
              />
            )
            : (
              <>
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
              </>
            )
          }
      </Stack.Navigator>
    </React.Fragment>
  )
};

export default StackScreens;
