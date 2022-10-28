import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer({isDark, setIsDark}) {

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
