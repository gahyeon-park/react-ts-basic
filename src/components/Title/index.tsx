import styled from "@emotion/styled";

interface TitleProps {
  label: string;
}

const Container = styled.h1`
    display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.div`
  margin-top: 0;
`

export function Title({ label }: TitleProps) {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  )
}