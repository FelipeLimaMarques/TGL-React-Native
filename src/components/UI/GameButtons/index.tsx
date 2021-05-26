import React from "react";
import { ITypes } from "../../../utils/interfaces";
import { ActivityIndicator } from "react-native";
import { GamesRow } from "./styles";
import GameButton from "./GameButton";
import { CANE } from "../../../utils/colors";

interface IGameButtonsProps {
  types: Array<ITypes>,
  handlePress: Function,
  ids: Array<number>,
  isFilter?: boolean
}

export default function GameButtons(props: IGameButtonsProps) {
  let gameButtons: JSX.Element | Array<JSX.Element> = <ActivityIndicator size="small" color={CANE} />;
  props.types.length >= 1 &&
    (gameButtons = props.types.map((type: any, index: number) => (
      <GameButton
        key={index}
        id={type.id}
        type={type.type}
        color={type.color}
        ids={props.ids}
        isFilter={props.isFilter}
        handlePress={props.handlePress}
      />
    )));
  return <GamesRow>{gameButtons}</GamesRow>;
}
