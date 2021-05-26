import React from 'react'
import { useAppDispatch } from '../../../../hooks'
import * as actions from '../../../../store/actions'
import {
    LogOutBox
} from './styles'
import { Feather } from '@expo/vector-icons';
import { BRIGHT_GRAY } from '../../../../utils/colors'

export default function LogOut() {
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(actions.logout())
    }

    return (
        <LogOutBox onPress={() => handleLogOut()}>
            <Feather name="log-out" size={34} color={BRIGHT_GRAY} />
        </LogOutBox>
    )
}
