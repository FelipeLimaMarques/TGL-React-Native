import styled from 'styled-components/native'

export const Container = styled.View`
    position: absolute;
    top: 80px;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
`

export const LogoBox = styled.View<{ small?: boolean }>`
    width: ${props => props.small ? '75px' : '100px'};
    height: 60px;
    justify-content: center;
    align-items: center;
`

export const LogoText = styled.Text<{ small?: boolean }>`
    color: #707070;
    font-size: ${props => props.small ? '30px' : '44px'};
    font-weight: bold;
    font-style: italic;
`

export const LogoLine = styled.View`
    width: 100%;
    height: 1px;
    background-color: #B5C401;
    border: 3px solid #B5C401;
    border-radius: 6px;
`