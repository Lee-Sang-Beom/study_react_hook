## HOC

- 상속 패턴에서, 상속 관계가 깊어질수록, 부모에 구현된 항목을 한 눈에 파악하기 어렵고, 원치않는 기능을 물려받을 수 있습니다.

- 이런 상속관계 간 종속성을 없애고, 기능만을 따로 떼어내어 조합하는 방법이 '데코레이터 패턴'입니다.

- 함수형 언어에서는, 이 방법을 고차함수를 이용해 구현합니다.

- HOC(하이어오더 컴포넌트)는 고차함수의 확장 기능을 리액트 컴포넌트에서도 구현할 수 있도록 고안된 디자인 패턴입니다.

- HOC는 인자로 컴포넌트를 입력받아, 새 컴포넌트를 반환하는 함수이며, 즉, 상속패턴을 사용하지않고, 공유할 기능만을 따로 적용하는 디자인 패턴 방식입니다.

## 구조

- 고차함수가 함수를 반환하는 구조를 가졌다면, HOC는 컴포넌트를 반환하는 구조를 가집니다.

- 다만, 인자에 컴포넌트를 전달하고, 새 컴포넌트 형태를 반환하는 구조입니다.

- 파라미터로 전달받은 컴포넌트는 출력함수에서 그대로 출력하는 구조로 출력하면 됩니다.

- 만약, 프로퍼티가 전달된다면(props) spread 연산자 표현식을 사용하여, 인자로 전달받은 컴포넌트의 프로퍼티 형태를 그대로 사용할 수 있도록 구현하면 됩니다.

## 규칙

- HOC 이름은 with로 시작해야 합니다. (여러 hoc조합 시, 기존 컴포넌트나 일반 함수와 쉽게 구분짓기 위해)

- HOC 구현 시, 컴포넌트 하나만을 인자로 전달받아 조합하도록 해야합니다.

- 추가로 전달할 인자는 커링 형태로 입력받아 HOC를 반환하도록 구현합니다.

- compose 함수를 사용해, 여러 하이어오더 컴포넌트를 조합할 수 있습니다.

## Test Code

```
import './App.css';
import { useState } from "react";
import withLoading from './component/HOC/WithLoading';
import withError from './component/HOC/WithError';

function Text(){
  return '텍스트 메시지입니다.';
}

function Input(){
  return <input/>;
}

// HOC
const TextWithLoading = withLoading(Text);
const InputWithLoading = withLoading(Input, <input value="로딩 중" disabled/>);
const InputWithError = withError(Input);

// 조합 HOC
// withLoading 결과로 return된 컴포넌트를 withError의 wrappedComponent로 전달
const InputWithLoadingAndError = withError(
  withLoading(
    Input,
    <input value="처리 중..." disabled/>
  )
)


function App() {
  return (
    <div>
      1. 텍스트 hoc
      <TextWithLoading isLoading={true}/>
      <br/>
      2. input hoc
      <InputWithLoading isLoading/>
      <br/>

      3. input error
      <InputWithError errorMsg={'입력값 오류 발생!'}/>
      <br/>

      {/* HOC 조합 예제 */}
      4. hoc 조합
      <InputWithLoadingAndError errorMsg={'입력값 오류 발생!'} isLoading />
    </div>
  );
}

export default App;

```
