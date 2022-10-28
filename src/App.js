import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Page from './component/Page';
import {ThemeContext} from './context/ThemeContext';
import {UserContext} from "./context/UserContext";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <UserContext.Provider value={'user'}>
        <Page/>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
