import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartDrawer from '../components/UI/CartDrawer'

//import StackScreens from './Stack'
import NewBet from '../containers/Screens/LoggedIn/NewBet'

export type RootDrawerParamList = {
    //Stack: undefined
    NewBet: undefined
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerScreens = () => (
    <Drawer.Navigator
        initialRouteName="NewBet"
        drawerContent={props => <CartDrawer {...props} />}
        drawerPosition='right'
        edgeWidth={-500}
        hideStatusBar={false}
        openByDefault={false}
        overlayColor="rgba(255, 255, 255, 0.8)"
        drawerStyle={{
            backgroundColor: 'white',
            height: '100%',
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14 
        }}
        screenOptions={{
            
        }}>
        <Drawer.Screen name="NewBet" component={NewBet} />
    </Drawer.Navigator>
);

export default DrawerScreens;