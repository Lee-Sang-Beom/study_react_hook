import React from "react";

const Component = () =>{
    const todoList = ['밥먹기', '코딩하기', '커피 마시기']
    return (
        <React.Fragment> {/*div로감싸면 문제. React.Fragment를 사용하면, 문제해결*/}
            {  
                todoList.map((todo, idx)=>( 
                    <React.Fragment key = {idx}> {/* 키를 넣어야한다면, React.Fragment 명시*/}
                        <td>{todo}, {idx}</td> {/*idx : 배열 인덱스*/}
                        <td>{todo}</td>
                    </React.Fragment >
                ))
            }
        </React.Fragment>
    )
}

export default Component;