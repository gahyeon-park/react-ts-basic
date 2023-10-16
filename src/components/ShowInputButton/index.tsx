import styled from '@emotion/styled';
import { Button } from "components/Button";

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`

interface ShowToDoInputProps {
  show: boolean;
  onClick: () => void;
}

export function ShowInputButton({ show, onClick }: ShowToDoInputProps) {
  return (
    <Container>
      <Button
        label={show ? "닫기" : "todo 추가"}
        color={show ? undefined : "#304ffe"}
        onClick={onClick}
      />
    </Container>
  )
}
