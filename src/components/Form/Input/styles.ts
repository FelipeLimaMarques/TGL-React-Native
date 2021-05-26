import styled from 'styled-components/native'
import { TextInput } from 'react-native-paper';
import { GRAY_BORDER } from '../../../utils/colors'

export const InputBox = styled.View`
    width: 100%;
    height: 70px;
`

export const InputArea = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
`

export const PaperInput = styled(TextInput)`
    background-color: transparent;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
`

export const BorderBottom = styled.View`
    width: 100%;
    height: 0;
    border: 1px solid ${GRAY_BORDER};
`