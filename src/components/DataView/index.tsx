import styled from "@emotion/styled";
import { Title } from "components/Title";
import { TodoList } from "components/TodoList";

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
  return (
    <Container>
      <Title label="TodoList" />
      <TodoList />
    </Container>
  )
}