import { createContext, useState } from "react";

export const Context = createContext(null);
export default function useIncHook() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  return { count, inc };
}
