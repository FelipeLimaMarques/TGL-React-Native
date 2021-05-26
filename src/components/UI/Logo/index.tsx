import React from 'react'
import {
    Container,
    LogoBox,
    LogoText,
    LogoLine
} from './styles'

interface ILogoProps {
    small?: boolean
}

export default function Logo(props: ILogoProps) {
    return props.small
        ? (
            <LogoBox small>
                <LogoText small>TGL</LogoText>
                <LogoLine />
            </LogoBox>
        )
        : (
            <Container>
                <LogoBox>
                    <LogoText>TGL</LogoText>
                    <LogoLine />
                </LogoBox>
            </Container>
        )
    
}
