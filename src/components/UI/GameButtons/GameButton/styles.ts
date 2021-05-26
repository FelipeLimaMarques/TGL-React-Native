import styled from 'styled-components/native'

export const ButtonBox = styled.TouchableOpacity<{ color: string, isSelected: boolean, isFilter?: boolean }>`
    background-color: ${props => props.isSelected ? props.color : '#FFFFFF'};
    min-width: 110px; 
    padding: ${props => props.isSelected ? '0 15px' : '3px 15px'};
    justify-content: ${props => props.isFilter ? 'flex-start' : 'center'};
    align-items: center;
    border: 3px solid ${props => props.color};
    border-radius: 100px;
`

export const ButtonText = styled.Text<{ color: string, isSelected: boolean }>`
    color: ${props => props.isSelected ? '#FFFFFF' : props.color};
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
`

export const RemoveFilterView = styled.View`
    height: 100%;
`
export const RemoveFilter = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
`