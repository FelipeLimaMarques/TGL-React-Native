import styled from 'styled-components/native'
import {
    DARK_GRAY,
    BRIGHT_GRAY,
    GRAY_BORDER
} from '../../utils/colors'

export const Container = styled.View<{ navButton?: boolean }>`
    width: 100%;
    margin: 20px 0;
    ${props => props.navButton ? 'margin-top: 180px' : 'margin-top: 80px'};
    justify-content: center;
    align-items: center;
`

export const FormBox= styled.View`
    margin: 20px 15px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid ${GRAY_BORDER};
    border-radius: 10px;
    elevation: 10;
`

export const InputView = styled.View`
    width: 100%;
`

export const FormTitle = styled.Text`
    color: ${DARK_GRAY};
    font-size: 36px;
    font-weight: bold;
    font-style: italic;
`

export const LinkView = styled.View`
    width: 100%;
    margin-top: 10px;
    align-items: flex-end;
`
export const LinkBox = styled.TouchableOpacity`
    padding: 0 20px;
`

export const LinkText = styled.Text`
    color: ${BRIGHT_GRAY};
    font-size: 14px;
    font-style: italic;
`