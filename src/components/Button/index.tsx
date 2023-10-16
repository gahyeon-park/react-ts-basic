import styled from "@emotion/styled";

interface ButtonProps {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

// interface ContainerProps {
//   readonly color: string;
// }

const Container = styled.button<{ color: string }>`
  border: none;
  color: #fff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: .8;
  }

  &:active {
    box-shadow: inset 5px 5px 18px rgba(0, 0, 0, .2);
  }
`

export function Button({ label, color = "#ff5722", onClick }: ButtonProps) {
  return (
    <Container color={color} onClick={onClick}>{label}</Container>
  )
}