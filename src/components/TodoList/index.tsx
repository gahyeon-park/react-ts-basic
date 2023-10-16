import styled from "@emotion/styled";
import TodoItem from "components/TodoItem";
import { useContext } from "react";
import { ToDoListContext } from "contexts/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export function TodoList() {
  const { todoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {todoList.map((todo, i) => <TodoItem key={i} label={todo} onDelete={() => {
        if (typeof onDelete === "function") onDelete(todo);
      }} />)}
    </Container>
  )
}