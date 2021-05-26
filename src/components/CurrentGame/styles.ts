import styled from 'styled-components/native'
import {
    DARK_GRAY,
    LIGHT_GRAY
} from '../../utils/colors'

export const Container = styled.View`
    width: 100%;
    padding-bottom: 6px;
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

export const Bold = styled.Text`
    font-weight: bold;
`

export const Description = styled.Text`
    margin-top: -15px;
    line-height: 24px;
    font-size: 14px;
    font-style: italic;
    color: ${LIGHT_GRAY};
`

export const LineView = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Line = styled.View`
    width: 36px;
    height: 6px;
    border-radius: 6px;
    background-color: ${LIGHT_GRAY};
`