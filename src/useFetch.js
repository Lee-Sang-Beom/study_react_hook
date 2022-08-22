import { useEffect, useState } from "react";

function useFetch(baseUrl, initType) {
  const [data, setData] = useState(null);

  // api를 받아오는 함수 (반환되는 json파일은 type에 따라 다름)
  const fetchUrl = (type) => {
    fetch(baseUrl+"/"+type)
    .then((res) => res.json())
    .then((res) => setData(res)); // 받아온 json값을 state에 저장
  }

  useEffect(() => {
    fetchUrl(initType); // 최초 렌더링 시, users 사용
  }, []);

  return { // 객체형태로 반환가능
    data,
    fetchUrl
  }
}
export default useFetch;
