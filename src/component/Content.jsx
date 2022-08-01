import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { isDark } = useContext(ThemeContext); // obj내, isDark만 가져옴
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </div>
  );
}

export default Content;
