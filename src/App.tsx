import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Header } from "components/BlogHeader";
import { BlogPost } from "components/BlogPost";
import mockPosts from "mock/posts.json";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #eee;
overflow: scroll;
`;

interface PostI {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<PostI[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
    }, 1000);
  }, []);

  return (
    <Container>
      <Header />
      {posts?.map(post => <BlogPost key={post.id} title={post.title} body={post.body} />)}
    </Container>
  )
}

export default App;