import React from 'react'
import {
    Container,
    BigText,
    Label,
} from './styles'
import { ITypes } from '../../utils/interfaces'
import GameButtons from '../UI/GameButtons'
import { ActivityIndicator } from 'react-native-paper'
import { CANE } from '../../utils/colors'

interface IFiltersProps {
    types: Array<ITypes>,
    handlePress: Function,
    filterIds: Array<number>
}

export default function Filters(props: IFiltersProps) {
    let buttons: JSX.Element | Array<JSX.Element> = <ActivityIndicator size="small" color={CANE} />
    props.types.length >= 1 && (buttons = <GameButtons
        types={props.types}
        handlePress={props.handlePress}
        ids={props.filterIds}
        isFilter />)

    return (
        <Container>
            <BigText>RECENT GAMES</BigText>
            <Label>Filters</Label>
            {buttons}
        </Container>
    )
}
