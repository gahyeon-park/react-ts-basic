import styled from "@emotion/styled";

interface LabelProps {
  readonly data: number;
}

export function Label({ data }: LabelProps) {
  return <Container>{data}</Container>
}

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`
