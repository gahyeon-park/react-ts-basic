import styled from "@emotion/styled";
import { ShowInputButton } from "components/ShowInputButton";
import { Title } from "components/Title";
import { TodoList } from "components/TodoList";
import { useNavigate } from "react-router-dom";

// interface DataViewProps {
//   readonly todoList: string[];
//   readonly onDelete?: (todo: string) => void;
// }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`

export const DataView = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title label="TodoList" />
      <TodoList />
      <ShowInputButton show={false} onClick={() => navigate('/add')} />
    </Container>
  )
}