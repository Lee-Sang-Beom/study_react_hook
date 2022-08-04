import { useEffect, useState } from "react";

export default function Box({createBoxStyle}){

    const [style, setStyle] = useState({});
    useEffect(()=>{
        console.log('box size 조절');
        setStyle(createBoxStyle());
    },[createBoxStyle]);

    return(
        <div style={style}>
            
        </div>
    );
}