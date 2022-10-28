import React, { useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Page({isDark, setIsDark}) {

  return (
    <div>
      <div className="page">
        <Header isDark={isDark} />
        <Content isDark={isDark} />
        <Footer isDark={isDark} setIsDark = {setIsDark} />
      </div>
    </div>
  );
}

export default Page;
