import styled from "@emotion/styled";
import TodoItem from "components/TodoItem";

interface TodoListProps {
  readonly todoList: string[];
  readonly onDelete?: (todo: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export function TodoList({ todoList, onDelete }: TodoListProps) {
  return (
    <Container>
      {todoList.map((todo, i) => (
        <TodoItem
          key={i}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }} />
      ))}
    </Container>
  )
}