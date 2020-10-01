import React from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";

function Content() {
  console.log("Content - Should not be updated");
  return (
    <>
      <Form />
      <Header />
      <Footer />
    </>
  );
}

export default Content;
