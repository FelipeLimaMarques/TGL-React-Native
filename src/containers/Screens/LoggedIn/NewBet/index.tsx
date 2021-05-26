import React, { useEffect, useCallback } from 'react'
import * as actions from '../../../../store/actions'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { useFocusEffect } from '@react-navigation/native'
import Layout from '../../../../components/UI/Layout'
import TabNavContainer from '../../../../components/UI/TabNavContainer'
import CurrentGame from '../../../../components/CurrentGame'
import GameNumbers from '../../../../components/UI/GameNumbers'
import Header from '../../../../components/Header'

export default function NewBet() {
    const dispatch = useAppDispatch()
    const types = useAppSelector(state => state.games.types)
    const current = useAppSelector(state => state.games.current)
    const numbers = useAppSelector(state => state.bets.bet.numbers)
    const bet = useAppSelector(state => state.bets.bet)

    useEffect(() => {
        dispatch(actions.setCurrentGame(1))
    }, [])

    useFocusEffect(useCallback(() => {
        dispatch(actions.setCurrentGame(1))
        return () => dispatch(actions.setCurrentGame(1))
    }, []))

    const handleSetCurrent = (id: number) => {
        dispatch(actions.setCurrentGame(id))
        dispatch(actions.clearNumbers(id))
    }

    const handleNumberClick = (number: number) => {
        dispatch(actions.addNumber(number, current['max-number'], current.id))
    }

    const handleComplete = () => {
        dispatch(actions.completeNumbers(current['max-number'], current.range, current.id))
    }

    const handleClear = () => {
        dispatch(actions.clearNumbers(current.id))
    }

    const handleAddToCart = () => {
        dispatch(actions.addToCart(bet, current))
    }

    return (
        <Layout>
            <Header showCart />
            <TabNavContainer>
                <CurrentGame
                    types={types}
                    current={current}
                    handleSetCurrent={handleSetCurrent}
                    numbers={numbers}
                    handleComplete={handleComplete}
                    handleClear={handleClear}
                    handleAddToCart={handleAddToCart}
                    handleNumberClick={handleNumberClick} />
                <GameNumbers
                    range={current.range}
                    handleNumberClick={handleNumberClick}
                    numbers={numbers}
                    color={current.color} />
            </TabNavContainer>
        </Layout>
    )
}
