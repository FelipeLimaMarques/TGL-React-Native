import React from "react";
import { Container } from "./styles";

export default function Layout(props: any) {
  return <Container>{props.children}</Container>;
}
