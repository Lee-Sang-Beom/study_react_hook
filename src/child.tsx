import React from "react";
import { memo } from "react";

interface IProps {
  name: {
    lastName: string;
    firstName: string;
  };
  tellMe: () => void;
}

const Child = ({ name, tellMe }: IProps) => {
  console.log("자식 컴포넌트 재렌더링");
  return (
    <div>
      <h1>자녀</h1>
      <p>이름 {name.firstName + name.lastName}</p>
      <button onClick={tellMe}>click</button>
    </div>
  );
};

export default memo(Child);
