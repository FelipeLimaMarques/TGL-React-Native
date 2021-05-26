import React from 'react'
import {
    ButtonBox,
    ButtonText
} from './styles'

interface IBetButtonProps {
    text: string,
    fill?: boolean,
    handlePress: Function
}

export default function BetButton(props: IBetButtonProps) {
    return (
        <ButtonBox fill={props.fill} onPress={() => props.handlePress()}>
            <ButtonText fill={props.fill}>{props.text}</ButtonText>
        </ButtonBox>
    )
}
