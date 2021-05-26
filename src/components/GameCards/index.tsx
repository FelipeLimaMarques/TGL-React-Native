import React, { useMemo } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { IBetFormated, IGame } from '../../utils/interfaces'
import {
    Container
} from './styles'
import GameCard from './GameCard'
import { CANE, DARK_GRAY } from '../../utils/colors'

interface IGameCardsProps {
    filtered?: Array<IBetFormated>,
    bets?: Array<{ numbers: string, game_id: number }>,
    showTrash?: boolean,
    types?: Array<IGame>
}

export default function GameCards(props: IGameCardsProps) {
    let cards: JSX.Element | Array<JSX.Element> = <ActivityIndicator size="small" color={CANE} />
    props.filtered ? (props.filtered!.length >= 1 ? (
        cards = <FlatList
            data={props.filtered}
            renderItem={({ item }) => <GameCard filtered={item} />}
            keyExtractor={item => String(item.id)}
        />
    ) : (cards = <Text style={{ fontStyle: 'italic', color: DARK_GRAY }}>Você não tem nenhuma aposta comprada</Text>)
    )
    : props.bets && props.bets!.length >= 1 && (
        cards = <FlatList
            data={props.bets}
            renderItem={({ item, index }) => <GameCard bet={item} types={props.types} index={index} showTrash />}
            keyExtractor={(item, index) => String(index)}
        />
    )

    return (
        <Container>
            {cards}
        </Container>
    )
}
