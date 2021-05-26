import React from 'react'
import {
    Container
} from './styles'

export default function TabNavContainer(props: { children?: React.ReactNode }) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
