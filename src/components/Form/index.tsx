import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "components/Button";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`

const InputGroup = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  font-size: 1.2rem;
`

const Input = styled.input`
  font-size: 1.2rem;
`

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

interface FormProps {
  onClose: () => void;
}

export function Form({ onClose }: FormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const registerPost = () => {
    if (title === '' || body === '') return;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // API를 사용해 데이터를 저장할 때에는 GET이 아닌 POST
      body: JSON.stringify({
        userId: 1,
        title,
        body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    }).then(res => res.json())
      .then(json => {
        console.log(json);
        if (typeof onClose === "function") onClose();
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그 글 등록</Title>
        <InputGroup>
          <Label>Title: </Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Body: </Label>
          <Input value={body} onChange={(e) => setBody(e.target.value)} />
        </InputGroup>
        <Actions>
          <Button label="등록하기" onClick={registerPost} />
          <Button label="닫기" color="#304ffe" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  )
}