import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #999;
  padding: 8px 0;
  margin: 0;
  z-index: 1;
`

const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
  color: #fff;
`

export const Header = () => {
  return (
    <Container>
      <StyledLink to="/">TodoList App</StyledLink>
    </Container>
  )
}