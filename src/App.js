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
