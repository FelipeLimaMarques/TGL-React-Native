import styled from 'styled-components/native'
import {
    CANE
} from '../../../../utils/colors'

export const ButtonBox = styled.TouchableOpacity<{ fill?: boolean }>`
    padding: 5px 10px;
    border-radius: 4px;
    background-color: ${props => props.fill ? CANE : 'transparent'};
    border: 1px solid ${CANE};
`

export const ButtonText = styled.Text<{ fill?: boolean }>`
    color: ${props => props.fill ? '#FFFFFF' : CANE};
    font-size: 14px;
    font-weight: bold;
`