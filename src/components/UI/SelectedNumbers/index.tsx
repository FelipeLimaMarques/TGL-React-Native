import React from 'react'
import {
    Container
} from './styles'
import SelectedNumber from './SelectedNumber'

interface ISelectedNumbersProps {
    numbers: Array<number>,
    color: string,
    handleNumberClick: Function
}

export default function SelectedNumbers(props: ISelectedNumbersProps) {
    let selected = props.numbers.map((num) => 
        <SelectedNumber key={num} color={props.color} number={num} handlePress={props.handleNumberClick} />
    )

    return (
        <Container>
            {selected}
        </Container>
    )
}
