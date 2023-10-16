import { createContext, useState } from "react";

interface Context {
  todoList: string[];
  onAdd: (toDo: string) => void;
  onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  todoList: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  onAdd: (): void => { },
  onDelete: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
});

interface TodoListProps {
  children: JSX.Element | JSX.Element[]
}

function ToDoListContextProvider({ children }: TodoListProps) {
  const [todoList, setTodoList] = useState(["study react", "study typescript", "to workout"]);

  const onDelete = (todo: string) => {
    setTodoList(todos => todos.filter(item => item !== todo));
  }

  const onAdd = (toDo: string) => {
    console.log("onAdd", toDo);
    setTodoList(todos => [...todos, toDo]);
  }

  return (
    <ToDoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  )
}

export { ToDoListContext, ToDoListContextProvider };