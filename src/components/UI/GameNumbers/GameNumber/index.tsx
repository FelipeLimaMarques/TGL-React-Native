import React from 'react'
import {
    ButtonBox,
    ButtonText
} from './styles'

interface IGameNumberProps {
    number: number,
    handlePress: Function,
    numbers: Array<number>,
    color: string,
}

export default function GameNumber(props: IGameNumberProps) {
    let n: string = String(props.number)
    if (props.number < 10) {
        n = `0${props.number}`
    }

    return (
        <ButtonBox
            selected={props.numbers.includes(props.number)}
            color={props.color}
            onPress={() => props.handlePress(props.number)}>
            <ButtonText>{n}</ButtonText>
        </ButtonBox>
    )
}
