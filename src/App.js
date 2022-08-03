import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const name = action.data;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,
      };

      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case "DEL":
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.id),
      };

    case "CHECK":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.id) {
            return { ...student, isHere: !student.isHere }; 
            // 만약 dispatch로 전달된 바꾸고자하는 action id가 student의 id와 같다면, 기존 student정보는 내버려두고, ishere만 바꾸는것
          }

          return student; // 위 if와 관련된 id가 아닌경우에는 그냥 student를 변경하지않고 return
        }),
      };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

function App() {
  const [name, setName] = useState("");

  // const [state이름, dispatch함수] = useReducer(변경해주는 reducer함수, state 초기값)
  const [studentState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentState.count}</p>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD", data: name });
        }}
      >
        추가
      </button>

      <br />
      {studentState.students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          id={student.id}
          dispatch={dispatch}
          isHere={student.isHere}
        />
      ))}
    </div>
  );
}

export default App;
