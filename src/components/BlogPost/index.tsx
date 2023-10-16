import styled from "@emotion/styled";

const Container = styled.div`
background-color: #fff;
padding: 20px;
margin: 20px;
border-radius: 10px;
box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #fff;
max-width: 800px;
`

const Title = styled.div`
  font-weight: bold;
  mix-blend-mode: 10px;
`

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

interface PostProps {
  title: string;
  body: string;
}

export const BlogPost = ({ title, body }: PostProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  )
}