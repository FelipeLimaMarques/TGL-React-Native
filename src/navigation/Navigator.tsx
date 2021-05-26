import React from 'react'
import { NavigationContainer } from "@react-navigation/native";

import StackScreens from './Stack'

const NavContainer = () => (
    <NavigationContainer>
        <StackScreens />
    </NavigationContainer>
)

export default NavContainer;