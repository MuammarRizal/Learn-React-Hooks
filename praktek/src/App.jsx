import { useState, useReducer, useRef } from "react";
import "./App.css";
import UseReducer from "./useReducer/UseReducer";
import UseEffect from "./useEffect/UseEffect";
import UseContext from "./useContext/UseContext";
import UseReff from "./useReff/UseReff";
import UseImperativeHandle from "./useImperativeHandle/UseImperativeHandle";
import UseMemo from "./useMemo/UseMemo";

function App() {
  const linkRef = useRef(null);
  console.log(linkRef);
  return (
    <>
      {/* <h3>Use Reducer</h3>
      <UseReducer />
      <hr />
      <h3>Use Effect</h3>
      <UseEffect /> */}

      {/* <UseContext /> */}

      {/* <UseReff /> */}

      {/* <UseImperativeHandle />

      <a href="#home" ref={linkRef}>
        click me
      </a> */}

      <UseMemo />
    </>
  );
}

export default App;
