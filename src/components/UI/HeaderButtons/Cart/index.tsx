import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RootDrawerParamList } from '../../../../navigation/Drawer'
import { AntDesign } from '@expo/vector-icons'; 
import {
    CartBox
} from './styles'
import { CANE } from '../../../../utils/colors'

export default function Cart() {
    const navigation = useNavigation() as DrawerNavigationProp<RootDrawerParamList, 'Stack'>

    return (
        <CartBox onPress={() => navigation.toggleDrawer()}>
            <AntDesign name="shoppingcart" size={34} color={CANE} />
        </CartBox>
    )
}
