import React, { createContext } from "react";
import { myContext } from "./Context/Context";
import ChildValue from "./child/ChildValue";

function UseContext() {
  const valueContext = {
    data: [
      {
        nama: "jange",
        umur: 22,
        lahir: "Jakarta Selatan",
      },
      {
        nama: "jangsss",
        umur: 23,
        lahir: "Jakarta Selatan",
      },
    ],
  };
  return (
    <myContext.Provider value={valueContext}>
      <ChildValue />
    </myContext.Provider>
  );
}

export default UseContext;
