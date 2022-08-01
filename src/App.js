import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect} from "react";
import Page from './component/Page';

function App() {

  const [isDark, setIsDark] = useState(false);
  

  return (
    <Page isDark={isDark} setIsDark = {setIsDark}/>
  );
}

export default App;
