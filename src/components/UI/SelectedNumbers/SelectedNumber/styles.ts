import styled from 'styled-components/native'

export const ButtonBox = styled.TouchableOpacity<{ color: string, noMargin: boolean }>`
    width: 42px;
    height: 42px;
    background-color: ${props => props.color};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-top: 8px;
    border-radius: 100px;
`

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 13px;
    font-weight: bold;
`

export const RemoveNumber = styled.Text`
    position: absolute;
    top: 2px;
    left: 26px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
`