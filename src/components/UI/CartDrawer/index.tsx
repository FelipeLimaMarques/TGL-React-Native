import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { ToastAndroid } from 'react-native'
import * as actions from '../../../store/actions'
import { formatToReal } from '../../../utils/functions'
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import {
    Container,
    Padding,
    Title,
    Row,
    CardsView,
    ButtonBox,
    ButtonBoxFlat,
    Bold,
    Italic,
    Normal,
    Spaced
} from './styles'
import { CANE } from '../../../utils/colors'
import GameCards from '../../GameCards'
import ButtonTo from '../ButtonTo'
import Loading from '../Loading'


export default function CartDrawer(props: DrawerContentComponentProps) {
    const dispatch = useAppDispatch()
    const bets = useAppSelector(state => state.bets.bets)
    const types = useAppSelector(state => state.games.types)
    const totalPrice = useAppSelector(state => state.bets.totalPrice)
    const isLoading = useAppSelector(state => state.bets.loading)

    const handleSubmit = () => {
        if (totalPrice >= 30) {
            dispatch(actions.saveBets(bets, props.navigation))
        } else {
            ToastAndroid.show('Valor mínimo de compra: R$ 30,00', ToastAndroid.SHORT)
        }
    }

    return (
        <Container>
            {isLoading && <Loading transparent />}
            <Padding>
                <Row>
                    <AntDesign name="shoppingcart" size={34} color={CANE} />
                    <Title>CART</Title>
                </Row>
                <CardsView>
                    {bets.length === 0
                        ? <Normal style={{ marginTop: 16 }}><Italic>Não há apostas no carrinho</Italic></Normal>
                        : <GameCards bets={bets} types={types} showTrash />
                    }
                </CardsView>
                <Spaced>
                    <Normal><Bold><Italic>CART</Italic></Bold> TOTAL:</Normal>
                    <Normal><Bold>{formatToReal(totalPrice)}</Bold></Normal>
                </Spaced>
            </Padding>
            <ButtonBox>
                <ButtonBoxFlat />
                <ButtonTo direction="arrowright" color={CANE} onPress={() => handleSubmit()} text="Save" size={34} />
            </ButtonBox>
        </Container>
    )
}
