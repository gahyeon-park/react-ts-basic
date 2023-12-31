import { Component, ErrorInfo, useState } from "react";
import styled from '@emotion/styled';
import { Button } from "components/Button";
import { Label } from "components/Label";
import { IScriptSnapshot } from "typescript";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const sub = () => {
//     setCounter(counter - 1);
//   }
//   const add = () => {
//     setCounter(counter + 1);
//   }
//   return (
//     <Container>
//       <Title>Counter App</Title>
//       <Contents>
//         <Button label="-" onClick={sub}></Button>
//         <Label data={counter} />
//         <Button label="+" onClick={add}></Button>
//       </Contents>
//     </Container>
//   );
// }

type AppProps = Record<string, never>; // ← 클래스 컴포넌트가 props는 받지 않고, state만 받을 경우의 props의 제네릭타입
interface AppState {
  readonly counter: number;
}

// 클래스형 : export class App extends Component<propsGenericType, stateGenericType>{}
export class App extends Component<AppProps, AppState> {
  // contsructor: 생성자 함수 (state를 초기화하는데 활용)
  constructor(props: AppProps) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  private sub = () => {
    // useState 훅을 사용하는 함수형 컴포넌트와 달리, 클래스 컴포넌트에서 state 변수에 접근할 때는 this.state를 사용해야 한다. 
    const { counter } = this.state;

    // 또한 state를 변경하기 위해서는 this.setState라는 함수를 통해 state를 변경한다.
    this.setState({
      counter: counter - 1
    })
  }

  private add = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  render() {
    const { counter } = this.state;

    return (
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={this.sub}></Button>
          <Label data={counter} />
          <Button label="+" onClick={this.add}></Button>
        </Contents>
      </Container>
    )
  }

  static getDerivedStateFromProps(nextProps: AppProps, prevState: AppState) {
    console.log("getDerivedStateFromProps");
    console.log("nextProps", nextProps);
    console.log("prevState", prevState);

    return null;
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>) {
    console.log("getSnapshotBeforeUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // getSnapshotBeforeUpdate함수의 반환값은 componentDidUpdate의 세번째 매개변수(snapshot)로 전달된다.
    return {
      testData: true
    }
  }

  componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: IScriptSnapshot): void {
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }

  shouldComponentUpdate(nextProps: Readonly<AppProps>, nextState: Readonly<AppState>, nextContext: any): boolean {
    console.log("shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);

    // false를 반환하면 컴포넌트의 리렌더링을 수행하지 않도록 막는다.
    return true;
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("componentDidCatch");
    console.log("error: ", error);
    console.log("errorInfo: ", errorInfo);
  }
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;
