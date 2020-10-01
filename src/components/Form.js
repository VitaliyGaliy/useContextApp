import React, { useContext } from "react";
import { Context } from "../App";

function Form() {
  console.log("Form @@@@@@");

  const store = useContext(Context);

  const increment = () => {
    store.inc();
  };

  return (
    <div>
      <div>{store.count}</div>
      <button onClick={increment}>inc</button>
    </div>
  );
}

export default Form;
