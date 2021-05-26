import React from 'react'
import { ActivityIndicator } from 'react-native'
import { CANE } from '../../../utils/colors'
import {
    Container,
    BG
} from './styles'

export default function Loading(props: { transparent: boolean }) {
    return (
        <Container transparent={props.transparent} >
            <BG>
                <ActivityIndicator size={100} color={CANE} />
            </BG>
        </Container>
    )
}
