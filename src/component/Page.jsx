import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Page() {
  return (
    <div>
      <div className="page">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default Page;
