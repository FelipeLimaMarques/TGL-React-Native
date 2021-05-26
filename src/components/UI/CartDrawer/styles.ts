import styled from 'styled-components/native'
import { DARK_GRAY } from '../../../utils/colors'

export const Container = styled.View`
    width: 100%;
    height: 100%;
`

export const Padding = styled.View`
    flex: 1;
    padding-top: 46px;
    padding-left: 26px;
    padding-right: 26px;
`

export const Title = styled.Text`
    margin-left: 12px;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    color: ${DARK_GRAY};
`

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
`

export const CardsView = styled.View`
    flex: 1;
`

export const ButtonBox = styled.TouchableOpacity`
    width: 100%;
    background-color: #EBEBEB;
    border-radius: 14px;
    padding-bottom: 10px;
`

export const ButtonBoxFlat = styled.TouchableOpacity`
    position: absolute;
    height: 14px;
    width: 100%;
    background-color: #EBEBEB;
`

export const Spaced = styled(Row)`
    margin-top: 10px;
    margin-bottom: 48px;
    justify-content: space-between;
`

export const Bold = styled.Text`
    font-weight: bold;
    
`
export const Italic = styled.Text`
    font-style: italic;
`

export const Normal = styled.Text`
    font-size: 16px;
    color: ${DARK_GRAY};
`