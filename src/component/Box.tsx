import { useEffect, useState } from "react";
import { styleSet } from "../App";

type Props = {
  createBoxStyle: () => styleSet;
};

const Box: React.FunctionComponent<Props> = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
};

export default Box;
