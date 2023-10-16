import { useState } from "react";
import styled from '@emotion/styled';
import { DataView } from "components/DataView";
import { InputContainer } from "components/InputContainer";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #eee;
`;


function App() {
  const [todoList, setTodoList] = useState(["study react", "study typescript", "to workout"]);

  const onDelete = (todo: string) => {
    setTodoList(todos => todos.filter(item => item !== todo));
  }

  const onAdd = (toDo: string) => {
    console.log("onAdd", toDo);
    setTodoList(todos => [...todos, toDo]);
  }

  return (
    <Container>
      <DataView todoList={todoList} onDelete={onDelete} />
      <InputContainer onAdd={onAdd} />
    </Container>
  )
}

export default App;