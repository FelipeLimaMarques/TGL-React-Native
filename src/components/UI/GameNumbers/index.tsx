import React from 'react'
import {
    Container,
    SView
} from './styles'
import GameNumber from './GameNumber'
import { CANE } from '../../../utils/colors'
import { ActivityIndicator } from 'react-native-paper'

interface IGameNumbersProps {
    range: number,
    handleNumberClick: Function,
    numbers: Array<number>,
    color: string
}

export default function GameNumbers(props: IGameNumbersProps) {
    const numbers: Array<number> = []
    for (let i = 1; i <= props.range; i++) {
        numbers.push(i)
    }

    let buttons: JSX.Element | Array<JSX.Element> = <ActivityIndicator size="small" color={CANE} />
    buttons = numbers.map((number) => (
        <GameNumber
            key={number}
            number={number}
            handlePress={props.handleNumberClick}
            numbers={props.numbers}
            color={props.color} />
    ))

    return (
        <SView>
            <Container>
                {buttons}
            </Container>
        </SView>
    )
}
