import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Title } from "components/Title";
import { TextInput } from "components/TextInput";
import { Button } from "components/Button";
import { ToDoListContext } from "contexts/ToDoList";
import { ShowInputButton } from "components/ShowInputButton";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(0 0 0 /75%);
`;

const Contents = styled.div`
  position: absolute;
  width: 320px;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// interface TodoInputProps {
//   onClose: () => void;
// }

export const TodoInput = () => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState('');
  const navigate = useNavigate();

  const onAddTodo = () => {
    if (toDo === "") return;
    console.log("onAddTodo");

    onAdd(toDo);
    setToDo('');
    navigate('/');
  }

  return (
    <Container>
      <Contents>
        <Title label="add ToDo" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
      <ShowInputButton show={true} onClick={() => navigate('/')} />
    </Container>
  )
};

