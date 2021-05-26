import React from 'react'
import {
    ButtonBox,
    ButtonText,
    RemoveNumber
} from './styles'

interface ISelectedNumber {
    color: string,
    number: number,
    handlePress: Function
}

export default function SelectedNumber(props: ISelectedNumber) {
    let n: string = String(props.number)
    if (props.number < 10) {
        n = `0${props.number}`
    }

    return (
        <ButtonBox color={props.color} noMargin={props.number + 1 % 7 === 0} onPress={() => props.handlePress(props.number)}>
            <ButtonText>{n}</ButtonText>
            <RemoveNumber>x</RemoveNumber>
        </ButtonBox>
    )
}
