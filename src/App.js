import React, { createContext, useState } from "react";
import Content from "./components/Content";
import useIncHook from "./useIncHook";

export const Context = createContext(null);
function App() {
  const { count, inc } = useIncHook();
  return (
    <Context.Provider
      value={{
        count,
        name: "Context Example",
        inc,
      }}
    >
      <Content />
    </Context.Provider>
  );
}

export default App;
