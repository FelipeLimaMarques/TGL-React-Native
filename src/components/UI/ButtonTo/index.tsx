import React from 'react'
import { IButtonToProps } from '../../../utils/interfaces'
import { AntDesign } from '@expo/vector-icons';
import {
    ButtonBox,
    ButtonText
} from './styles'

export default function ButtonTo(props: IButtonToProps) {
    return (
        <ButtonBox onPress={() => props.onPress()} direction={props.direction}>
            <ButtonText color={props.color}>{props.text}</ButtonText>
            <AntDesign name={props.direction} size={props.size} color={props.color} />
        </ButtonBox>
    )
}
