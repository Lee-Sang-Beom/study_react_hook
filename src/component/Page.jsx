import React, { useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Page() {

  // useContext를 사용하여 전달한 data를 받아오기 위해서는 useContext를 import시킨 후, 만들어준 themecontext를 사용
//   const data = useContext(ThemeContext); // isdark, setisdark
//   console.log(data);

  return (
    <div>
      <div className="page">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
