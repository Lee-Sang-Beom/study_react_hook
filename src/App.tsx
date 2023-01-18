import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Child from "./child";

interface IProps {
  name: string;
  tellMe: React.FC;
}

function App() {
  const [parentAge, setParentAge] = useState<number>(0);

  const name = {
    lastName: "길동",
    firstName: "홍",
  };

  const tellMe = useCallback(() => {
    return console.log("hello");
  }, []);

  const incrementParentAge = () => setParentAge((prev) => prev + 1);
  return (
    <div>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>

      <hr />

      <Child name={name} tellMe={tellMe} />
    </div>
  );
}

export default App;
