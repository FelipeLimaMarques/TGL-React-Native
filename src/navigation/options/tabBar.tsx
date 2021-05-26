import React from 'react'
import { View, Image } from 'react-native'
import { BottomTabBarOptions, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { DARK_GRAY, BRIGHT_GRAY, CANE } from "../../utils/colors";
import { Ionicons } from '@expo/vector-icons';
import NewBetIcon from '../../../assets/bets.svg'

export const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: DARK_GRAY,
  inactiveTintColor: BRIGHT_GRAY,
  style: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 70,
  },
  tabStyle: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyle: {
    marginBottom: 10,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
  },
};

export const tabScreenOptions: Function = (title: string, iconName: "home-outline" | "ios-person-outline") => {
  const options: BottomTabNavigationOptions = {
    title: title,
    tabBarIcon: (props: { focused: boolean, color: string, size: number }) => (
      <View style={{ marginBottom: -10 }}>
        {props.focused && <View style={{ position: 'absolute', top: -10, width: 30, height: 4, borderRadius: 6, backgroundColor: CANE }} />}
        <Ionicons name={iconName} size={30} color={props.focused ? CANE : BRIGHT_GRAY} />
      </View>
    )
  }

  return options;
}

export const newBetOptions: Function = () => {
  const options: BottomTabNavigationOptions = {
    title: '',
    tabBarIcon: (props: { focused: boolean, color: string, size: number }) => (
      <View style={{
        width: 90,
        height: 90,
        position: 'absolute',
        top: -30,
        borderRadius: 100,
        borderColor: props.focused ? CANE : 'white',
        borderWidth: 5,
        elevation: 10}}>
          <NewBetIcon width="100%" height="100%" />
        </View>
    )
  }

  return options;
}