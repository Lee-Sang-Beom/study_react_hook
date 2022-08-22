import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import "./css/style.css";
import Component from "./Component";
import useFetch from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {

  // useFetch에서 data 프로퍼티만 받아와, 이름을 userDataㅀ 사용
  const { data: usrData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");
  return (
    <div>
      <h1>user</h1>
      {usrData && <pre>{JSON.stringify(usrData[0], null, 2)}</pre>}
      <h1>post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}

    </div>
  );
}

export default App;
