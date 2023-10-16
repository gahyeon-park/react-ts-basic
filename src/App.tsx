import styled from '@emotion/styled';
import { DataView } from "pages/DataView";
// import { InputContainer } from "components/InputContainer";
import { ToDoListContextProvider } from "contexts/ToDoList";
import { Routes, Route } from "react-router-dom";
import { TodoInput } from 'pages/TodoInput';
import { Header } from "components/Header";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #eee;
`;

const NotFound = styled.div`
  text-align: center;
`



function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<TodoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                404<br /> NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  )
}

export default App;