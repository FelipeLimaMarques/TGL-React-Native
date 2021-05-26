import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useAppDispatch } from '../hooks'
import * as actions from '../store/actions'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  tabBarOptions,
  tabScreenOptions,
  newBetOptions,
} from "./options/tabBar";
import RecentGames from "../containers/Screens/LoggedIn/RecentGames";
import UpdateAccount from "../containers/Screens/LoggedIn/UpdateAccount";
import DrawerScreens from './Drawer'

export type RootTabParamList = {
    RecentGames: undefined,
    Drawer: undefined,
    UpdateAccount: undefined,
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabScreens = () => {
  const dispatch = useAppDispatch()

  useFocusEffect(useCallback(() => {
    dispatch(actions.fetchGames())
    dispatch(actions.fetchBets())
    dispatch(actions.fetchUserData())
    dispatch(actions.unfilterBets())
    return () => {}
  }, []))
  
  return (
    <Tab.Navigator initialRouteName="RecentGames" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="RecentGames"
        component={RecentGames}
        options={tabScreenOptions("Home", "home-outline")}
      />
      <Tab.Screen name="Drawer" component={DrawerScreens} options={newBetOptions()} />
      <Tab.Screen
        name="UpdateAccount"
        component={UpdateAccount}
        options={tabScreenOptions("Account", "ios-person-outline")}
      />
    </Tab.Navigator>
  );
}

export default TabScreens;
