import {memo} from "react"

const Child = ({ name, tellMe }) => {
  console.log("자식 컴포넌트가 렌더링 되었어요"); // name, age변경이 없을경우 굳이 제랜더링 될필요없음
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h1>자녀</h1>
      <p>이름 : {name}</p>
      <button onClick = {tellMe}> 눌러보세요 </button>
    </div>
  );
}

export default memo(Child);

// app.js에서 사용된 child 컴포넌트는 react.memo로 최적화됨 -> memo(Child)
// 렌더링 상황때마다 prop check라는 걸 함.
// prop 변화가 없으면 이전 렌더링된 컴포넌트 결과를 재사용