import styled from "@emotion/styled";

interface TextInputProps {
  value?: string;
  onChange: (text: string) => void;
}

const Container = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`

export function TextInput({ value, onChange }: TextInputProps) {
  return (
    <Container value={value} onChange={(event) => onChange(event?.target.value)} />
  )
}