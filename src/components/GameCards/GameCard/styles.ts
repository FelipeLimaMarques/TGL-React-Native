import styled from 'styled-components/native'
import {
    LIGHT_GRAY,
} from '../../../utils/colors'

export const CardBox = styled.View`
    width: 100%;
    height: 80px;
    margin-bottom: 25px;
    flex-direction: row;
`

export const TextView = styled.View`
    height: 100%;
    width: 100%;
    padding: 3px 0;
    justify-content: space-between;
`

export const CardLine = styled.View<{ color: string }>`
    width: 6px;
    height: 100%;
    margin-right: 15px;
    background-color: ${props => props.color};
    border-radius: 100px;
`

export const Numbers = styled.Text`
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    color: ${LIGHT_GRAY};
`

export const DateNPrice = styled.Text`
    color: ${LIGHT_GRAY};
`

export const Type = styled.Text<{ color: string }>`
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    color: ${props => props.color};
`

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
`

export const TrashBox = styled.TouchableOpacity`
    margin-left: 44px;
    align-items: center;
    justify-content: center;
`