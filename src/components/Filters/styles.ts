import styled from 'styled-components/native'
import {
    DARK_GRAY,
    LIGHT_GRAY
} from '../../utils/colors'

export const Container = styled.View`
    width: 100%;
`

export const BigText = styled.Text`
    font-size: 24px;
    font-style: italic;
    font-weight: bold;
    color: ${DARK_GRAY};
`

export const Label = styled.Text`
    margin: 15px 0;
    font-size: 18px;
    font-style: italic;
    color: ${LIGHT_GRAY};
`

