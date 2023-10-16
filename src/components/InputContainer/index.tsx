import { useState } from "react";
import { TodoInput } from 'components/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';

export function InputContainer() {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    setShowToDoInput(false);
  }

  return (
    <>
      {showToDoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  )
}