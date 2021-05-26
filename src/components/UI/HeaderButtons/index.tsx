import React from 'react'
import LogOut from './LogOut'
import Cart from './Cart'
import {
    Container
} from './styles'

export default function HeaderButtons(props: { showCart?: boolean }) {
    return (
        <Container>
            {props.showCart && <Cart />}
            <LogOut />
        </Container>
    )
}
