import styled from "@emotion/styled";
import { Component } from "react";

interface LabelProps {
  readonly data: number;
}

// export function Label({ data }: LabelProps) {
//   return <Container>{data}</Container>
// }

export class Label extends Component<LabelProps> {
  render() {
    const { data } = this.props;
    return <Container>{data}</Container>;
  }
}

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`
