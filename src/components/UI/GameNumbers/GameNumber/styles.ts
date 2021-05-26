import styled from 'styled-components/native'
import {
    BUTTON_NUMBER
} from '../../../../utils/colors'

export const ButtonBox = styled.TouchableOpacity<{ selected: boolean, color: string }>`
    width: 60px;
    height: 60px;
    background-color: ${props => props.selected ? props.color : BUTTON_NUMBER};
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 100px;
`

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`