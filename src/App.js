import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import Page from "./component/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    /* ThemeContext.Provider가 감싸는 컴포넌트는 value값 (전달값이 여러개면 obj로)으로 전달된 값을 props없이 전달받을 수 있음.
       만약 provider에서 value값으로 전달해주는 것이 없으며, 그 상황에서 하위 컴포넌트들이 useContext(ThemeContext)로 어떠한 값을 받길 원한다면,
       themecontext.js에서 createContext하며 초기화한 값을 받게됨 */

    <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
    </ThemeContext.Provider>
  );
}

export default App;
