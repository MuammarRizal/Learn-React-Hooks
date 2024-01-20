import { useState, useReducer } from "react";
import "./App.css";
import UseReducer from "./useReducer/UseReducer";
import UseEffect from "./useEffect/UseEffect";
import UseContext from "./useContext/UseContext";
import UseReff from "./useReff/UseReff";
import UseImperativeHandle from "../useImperativeHandle/UseImperativeHandle";

function App() {
  return (
    <>
      {/* <h3>Use Reducer</h3>
      <UseReducer />
      <hr />
      <h3>Use Effect</h3>
      <UseEffect /> */}

      {/* <UseContext /> */}

      {/* <UseReff /> */}

      <UseImperativeHandle />
    </>
  );
}

export default App;
