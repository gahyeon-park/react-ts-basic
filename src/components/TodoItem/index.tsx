import styled from "@emotion/styled";
import { Button } from "components/Button";

interface TodoItemProps {
  label: string;
  onDelete?: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

export const TodoItem = ({ label, onDelete }: TodoItemProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete}></Button>
    </Container>
  )
}

export default TodoItem;