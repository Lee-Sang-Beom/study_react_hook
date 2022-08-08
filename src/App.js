import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import "./css/style.css";
import Component from "./Component";
function App() {

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th> 할것 1 </th>
            <th> 할것 2 </th>
            <th> 할것 3 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Component /> {/*td 태그는 div의 자식이 될 수 없는 문제 발생*/}
          </tr>
          <tr>
            <Component />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
