import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect, useMemo } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };

  const location = useMemo(() => {
    return { 
      country: isKorea ? "한국" : "외국" 
    };
  }, [isKorea]);

  /* 
    - location이 obj이면, num만 변경해도 useEffect가 호출됨
    - 원시타입은 값이 변수라는 상자에 바로 들어가는 모습이라면
    - 객체(obj)타입은 객체가 크기때문에 바로 변수라는 상자에 할당되는게 아니라, 
      메모리 상 공간이 할당되고, 그 메모리 안에 보관됨. 

      변수 안에는 그 객체가 담긴 메모리의 주소가 당김.

      그렇기에 만약 아래와 같은 obj 변수가 있을 때 내용물은 같지만, 변수 안에는 실제 메모리주소가 있고,
      그 변수를 비교할때, 변수 내에 있는 요소인 메모리주소가 달라 loc1 !== loc2이다.

        const location1 = {
          country: isKorea ? "한국" : "외국"
        };

        const location2 = {
          country: isKorea ? "한국" : "외국"
        };

    - 해당 예제에서, app컴포넌트도 함수형 컴포넌트이기 때문에 num값을 변경시키면 app()도 다시 불려오게되고, 
    location obj는 다른 메모리주소를 갖는 다른 obj가 되기 때문에 useEffect가 불리게 됨

      const location = useMemo(() => {
        return { 
          country: isKorea ? "한국" : "외국" 
        };
      }, [isKorea]);

    - 그래서, useMemo로 isKorea가 변경될때만 return하는 방식으로 location을 원하는 때에 변경시켜주어 useEffect를 부르는 방법을 사용 가능하다


  */
  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>몇 끼 먹어요?</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <br />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
