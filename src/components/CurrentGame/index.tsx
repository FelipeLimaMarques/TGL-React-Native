import React from 'react'
import { ActivityIndicator } from 'react-native'
import { ITypes, IGame } from '../../utils/interfaces'
import {
    Container,
    BigText,
    Label,
    Description,
    Bold,
    LineView,
    Line
} from './styles'
import GameButtons from '../UI/GameButtons'
import BetButtons from '../UI/BetButtons'
import SelectedNumbers from '../UI/SelectedNumbers'
import { CANE } from '../../utils/colors'

interface ICurrentGameProps {
    types: Array<ITypes>,
    current: IGame,
    handleSetCurrent: Function,
    handleComplete: Function,
    handleClear: Function,
    handleAddToCart: Function,
    handleNumberClick: Function,
    numbers: Array<number>
}

export default function CurrentGame(props: ICurrentGameProps) {
    let buttons: JSX.Element | Array<JSX.Element> = <ActivityIndicator size="small" color={CANE} />
    let showButtons: JSX.Element | Array<JSX.Element> = (
        <React.Fragment>
            <Label><Bold>Fill your bet</Bold></Label>
            <Description>{props.current.description}</Description>
        </React.Fragment>
    )
    props.types.length >= 1 && (
        buttons = <GameButtons
            types={props.types}
            ids={[props.current.id]}
            handlePress={props.handleSetCurrent} />
    )
    props.numbers.length >= 1 && (
        showButtons = 
            <React.Fragment>
                <SelectedNumbers
                    numbers={props.numbers}
                    color={props.current.color}
                    handleNumberClick={props.handleNumberClick} />
                <BetButtons
                    handleComplete={props.handleComplete}
                    handleClear={props.handleClear}
                    handleAddToCart={props.handleAddToCart} />
            </React.Fragment>
    )

    return (
        <Container>
            <BigText>NEW BET FOR {props.current.type.toUpperCase()}</BigText>
            <Label>Choose a game</Label>
            {buttons}
            {showButtons}
            <LineView><Line /></LineView>
        </Container>
    )
}
