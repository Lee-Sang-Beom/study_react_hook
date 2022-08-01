import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext); // obj내, isDark만 가져옴
  
  const toggle = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggle}>
        Dark Mode
      </button>
    </footer>
  );
}

export default Footer;
