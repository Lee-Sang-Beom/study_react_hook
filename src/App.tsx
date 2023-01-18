import "./App.css";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Box from "./component/Box";

export interface styleSet {
  backgroundColor: string;
  width: string;
  height: string;
}

function App() {
  const [size, setSize] = useState<string | number>(100);
  const [isDark, setIsDark] = useState<Boolean>(true);

  function returnStyle(): styleSet {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }

  const createBoxStyle = useCallback(returnStyle, [isDark]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSize(value);
  };

  const toggleIsDark = () => {
    setIsDark((prev) => !prev);
  };

  const Div = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${isDark ? "black" : "white"}
    color: ${isDark ? "white" : "black"}
    `;

  const Container = styled.div`
    width: 100%;
    height: 100vh;
  `;

  return (
    <Container>
      <Div style={{ backgroundColor: isDark ? "black" : "white" }}>
        <input type="number" value={size} onChange={onChange} />
        <input />
        <button onClick={toggleIsDark}>Change</button>
        <Box createBoxStyle={createBoxStyle} />
      </Div>
    </Container>
  );
}

export default App;
