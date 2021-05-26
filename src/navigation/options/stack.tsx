import React from 'react'
import { StackNavigationOptions } from "@react-navigation/stack";
import Logo from '../../components/UI/Logo'
import HeaderButtons from '../../components/UI/HeaderButtons'

export const stackScreenOptions: StackNavigationOptions = {
    headerShown: false,
    headerTitle: () => <Logo small />,
    headerLeft: () => null,
    headerRight: () => <HeaderButtons />,
    headerStyle: {
      height: 110,
    }
}