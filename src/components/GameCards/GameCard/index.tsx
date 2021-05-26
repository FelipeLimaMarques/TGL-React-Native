import React from 'react'
import { useAppDispatch } from '../../../hooks'
import * as actions from '../../../store/actions'
import { EvilIcons } from '@expo/vector-icons';
import { IBetFormated, IGame } from '../../../utils/interfaces'
import { formatToReal, formatDate } from '../../../utils/functions'
import {
    CardBox,
    CardLine,
    DateNPrice,
    Numbers,
    Type,
    TextView,
    Row,
    TrashBox
} from './styles'

export default function GameCard(props: { filtered?: IBetFormated, bet?: { numbers: string, game_id: number }, showTrash?: boolean, index?: number, types?: Array<IGame> }) {
    const dispatch = useAppDispatch()
    let betGame: IGame | undefined;
    props.types && props.bet && (betGame = props.types.find((type: any) => type.id === props.bet!.game_id))

    return (
        <CardBox>
            <CardLine color={props.filtered ? props.filtered.game.color : betGame!.color} />
            <TextView>
                <Numbers>{props.filtered ? props.filtered.numbers : props.bet!.numbers}</Numbers>
                <Row>
                    <DateNPrice>{formatDate(props.filtered ? props.filtered.created_at : Date.now())} - ({formatToReal(props.filtered ? props.filtered.price : betGame!.price)})</DateNPrice>
                    {props.showTrash &&
                        <TrashBox onPress={() => dispatch(actions.removeFromCart(props.index!, betGame!.price))}>
                            <EvilIcons name="trash" size={24} color="black" />
                        </TrashBox>
                    }
                </Row>
                <Type color={props.filtered ? props.filtered.game.color : betGame!.color}>{props.filtered ? props.filtered.game.type : betGame!.type}</Type>
            </TextView>
        </CardBox>
    )
}
