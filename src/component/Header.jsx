import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const { isDark } = useContext(ThemeContext); // obj내, isDark만 가져옴
//   const user = useContext(UserContext); // obj내, isDark만 가져옴
  console.log(isDark);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>{`Welcome`}</h1>
    </header>
  );
}

export default Header;
