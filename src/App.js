import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

function App() {
  /* 
   react에서, state변경될때마다 렌더링됨.
   state변경시, app 컴포넌트도 렌더링되고, 그 자식컴포넌트들도 다시 렌더링
  */
  const [parentAge, setParentAge] = useState(0);

  /*
  - obj는 js에서 원시타입이 아님. 변수 안에 메모리주소가 저장되기 때문에
    렌더링될때마다 app()이 다시 호출되고, 그때마다 변수에는 다른 메모리주소가 저장.

  - 그렇기 때문에 props인 name에 변화가 있다고 판단함 (react.memo의 효과를 얻기 힘듬)
  
  - obj 자체를 변수에 대입하는 것은 useMemo. 
    함수를 변수에 대입하는 객체의 형식은 useCallback
   
  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  }, []);
  */

  /*
   - 부모 컴포넌트에서 부모나이증가 버튼을 누르는 행위는 자식컴포넌트에 영향x
     하지만, 자식컴포넌트의 console.log가 호출되는 것을 보아하니, 자식컴포넌트 재렌더링되는 것을 확인가능

   - 함수 또한 obj이기 때문임. 즉, 부모 컴포넌트의 재렌더링에 따라, tellMe()의 메모리주소가 변경되기 때문에 props가 변화되었다고 인식하는 것임
   - 함수는 useCallback으로 memorization 가능
  */

  // const tellMe = () => {console.log('hello')}
  const tellMe = useCallback(()=>{ return console.log('hello')},[]);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링 되었어요");

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모나이증가</button>
      <Child name={'홍길동'} tellMe={tellMe}/>
    </div>
  );
}

export default App;
