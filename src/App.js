import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer, useEffect, useCallback } from "react";
import Box from "./Box";

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  /* 
   - 아래처럼 하면, changeTheme 버튼으로 인한 재 렌더링으로, 
     app()이 재호출되면서 createBoxStyle이 재초기화 됨. 

   - 함수객체가 createBoxStyle이기때문에 메모리주소가 달라져,
     다른값으로 생각하기 때문에 Box.js의 useEffect가 실행됨

   - 이렇게 불필요한 함수의 재렌더링을 막기위해 useCallback사용
  */ 

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };

  const createBoxStyle = useCallback(()=>{
    return {
          backgroundColor: "pink",
          width: `${size}px`,
          height: `${size}px`,
        };
  },[size])

  return (
    <div style={{
      backgroundColor : isDark ? "black" : "yellow",
    }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={()=>setIsDark(!isDark)}>change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default App;
