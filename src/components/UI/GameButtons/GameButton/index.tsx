import React from "react";
import {
    ButtonBox,
    ButtonText,
    RemoveFilter,
    RemoveFilterView
} from "./styles";

interface IGameButtonProps {
  id: number;
  color: string;
  type: string;
  handlePress: Function;
  ids: Array<number>,
  isFilter?: boolean
}

export default function GameButton(props: IGameButtonProps) {
    return props.isFilter
        ? (
        <ButtonBox color={props.color} isSelected={props.ids.includes(props.id)} isFilter={props.isFilter} onPress={() => props.handlePress(props.id)}>
            <ButtonText
                color={props.color}
                isSelected={props.ids.includes(props.id)}>
                    {props.type}
                    {props.ids.includes(props.id) &&
                        <RemoveFilterView>
                            <RemoveFilter> x</RemoveFilter>
                        </RemoveFilterView>}
            </ButtonText>
        </ButtonBox>
        )
        : (
        <ButtonBox color={props.color} isSelected={props.ids.includes(props.id)} onPress={() => props.handlePress(props.id)}>
            <ButtonText color={props.color} isSelected={props.ids.includes(props.id)}>{props.type}</ButtonText>
        </ButtonBox>
        )
}
