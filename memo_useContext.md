## Context와 useContext

---
### **react에서, context란?**
#### 1. Context: 앱 내에서 전역적으로 사용되는 데이터를 컴포넌트끼리 쉽게 공유할 수 있는 방법 제공

#### 2. prop drilling
- props를 통해 부모 컴포넌트에서 여러 중간 자식 컴포넌트를 거쳐, 원하는 특정 컴포넌트까지 데이터를 전달하는 흐름적인 과정이다.

- 컴포넌트들이 받는 props가 많아지며, 코드가 더러워진다. 

- 또한, 중간에 데이터가 의도치 않게 바뀌게되면, 유지보수도 어려워진다.

#### 3. props 대신 context를 사용해 데이터를 공유하면, 하나의 데이터를 모든 자식컴포넌트들이 useContext hook으로 받아오고 사용할 수 있다.
- useContext: context로 공유한 data를 쉽게 받아올 수 있도록 하는 hook

#### 4. context는 꼭 필요할 때만 사용해야 한다.
  - context를 사용하면 컴포넌트 자체를 재사용하기 어려워질 수 있다.
  - 단지 prop drilling을 피하기 위한 목적이면, componetn composition(컴포넌트 합성)을 추천한다고 한다.

---

### **props drilling 예제**

1. App.js
```
import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect} from "react";
import Page from './component/Page';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
        <Page isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default App;

```

2. page.jsx
```
import React, { useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Page({isDark, setIsDark}) {

  return (
    <div>
      <div className="page">
        <Header isDark={isDark} />
        <Content isDark={isDark} />
        <Footer isDark={isDark} setIsDark = {setIsDark} />
      </div>
    </div>
  );
}

export default Page;
```

3. content.jsx
```
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content({isDark}) {
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
```

4. footer.jsx
```
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
```

5. header.jsx
```
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Header({isDark}) {

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
```
---

### **useContext 예제**

1. context/ThemeContext.js
- 먼저, context를 관리할 컴포넌트 파일을 만듭니다.
- createContext는, App.js(root)에서 Provider로 감싸면서 value를 전달할 때, value가 지정되지 않았을 때의 초기값을 의미합니다.

```
import { createContext } from "react";

export const ThemeContext = createContext(null);
```

2. App.js
- context 관리 파일을 import하고, 부모 컴포넌트를 ```<ComponentName.Provider>```로 묶어줍니다.

- 그리고, value로 접근 가능한 상태값을 넣어주면, Provider 하위 컴포넌트는 이 상태값들에 접근할 수 있게 됩니다. 

- 아래 예제에서 ThemeContext.provider는 ThemeContext로 정의한 공간이 있고, 이 공간에 value값인 {isDark, setIsDark}를 집어넣었다고 생각하면 됩니다.
```
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Page from './component/Page';
import {ThemeContext} from './ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page/>
    </ThemeContext.Provider>
  );
}

export default App;
```

3. page.jsx
```
import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Page() {
  return (
    <div>
      <div className="page">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default Page;
```

4. header.jsx
- App.js로 전달한 value라는 context를 불러오기 위해서는 useContext Hook을 사용하여야 합니다.

- 그리고 아래 예제처럼 비구조화 할당으로 isDark와 같은 상태만 쏙 가져올 수 있습니다.
```
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const {isDark} = useContext(ThemeContext);

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
```

5. footer.jsx
```
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const {isDark, setIsDark} = useContext(ThemeContext);
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
```

---

### 추가 : userContext.js

1. userContext.js
```
import { createContext } from "react";

export const UserContext = createContext(null);
```

2. app.js

```
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
```

3. header.jsx
```
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>{`Welcome ${user}` }</h1>
    </header>
  );
}

export default Header;
```