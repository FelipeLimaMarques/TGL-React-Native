import React from 'react'
import {
    Container
} from './styles'
import BetButton from './BetButton'

interface IBetButtonsProps {
    handleComplete: Function,
    handleClear: Function,
    handleAddToCart: Function,
}

export default function BetButtons(props: IBetButtonsProps) {
    return (
        <Container>
            <BetButton text="Complete game" handlePress={props.handleComplete} />
            <BetButton text="Clear game" handlePress={props.handleClear}/>
            <BetButton text="Add to cart" fill handlePress={props.handleAddToCart}/>
        </Container>
    )
}
