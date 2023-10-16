import { useState } from "react";
import { TodoInput } from 'components/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';

interface InputContainerProps {
  onAdd: (toDo: string) => void;
}

export function InputContainer({ onAdd }: InputContainerProps) {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddTodo = (toDo: string) => {
    console.log("onAdd", toDo);

    onAdd(toDo);
    setShowToDoInput(false);
  }

  return (
    <>
      {showToDoInput && <TodoInput onAdd={onAddTodo} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  )
}