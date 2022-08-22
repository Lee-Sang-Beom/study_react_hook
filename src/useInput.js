import { useState } from "react";

function useInput(initialValue, submitAction) {

    // custom hook에서 useState사용
    const [inputValue, setInputValue] = useState(initialValue);
  
    // custom hook에서, state관리
    const handleChange=(e)=>{
      setInputValue(e.target.value);
    }
  
    const handleSubmit =() =>{
      // useInput이 받은 함수사용 : inputValue를 넣어, alert되도록 함
      submitAction(inputValue);
      setInputValue("");
    }

    // 관리될 state나 함수 반환
    return [inputValue, handleChange, handleSubmit];
  }
  
  export default useInput;
  