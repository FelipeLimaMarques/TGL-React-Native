import React from 'react'
import {
    Container
} from './styles'
import HeaderButtons from '../UI/HeaderButtons'
import Logo from '../UI/Logo'

export default function Header(props: { showCart?: boolean }) {
    return (
        <Container>
            <Logo small />
            <HeaderButtons showCart={props.showCart}/>
        </Container>
    )
}
