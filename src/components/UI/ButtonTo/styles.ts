import styled from 'styled-components/native'

export const ButtonBox = styled.TouchableOpacity<{ direction: "arrowright" | "arrowleft" }>`
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.direction === "arrowright" ? 'row' : 'row-reverse'};
`

export const ButtonText = styled.Text<{ color: string }>`
    color: ${props => props.color};
    margin: 0 10px;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
`