import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Header } from "components/BlogHeader";
import { BlogPost } from "components/BlogPost";
// import mockPosts from "mock/posts.json";
import { Button } from "components/Button";
import { Form } from "components/Form";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #eee;
overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`

interface PostI {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<PostI[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPosts);
    // }, 1000);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(err => { console.log(err) });
  }, []);

  return (
    <Container>
      <Header />
      {posts?.map(post => <BlogPost key={post.id} title={post.title} body={post.body} />)}
      <ButtonContainer>
        <Button label="등록" onClick={() => setShowForm(true)} />
      </ButtonContainer>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </Container>
  )
}

export default App;