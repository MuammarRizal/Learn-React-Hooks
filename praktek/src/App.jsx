import { useState, useReducer } from "react";
import "./App.css";
import UseReducer from "./useReducer/UseReducer";
import UseEffect from "./useEffect/UseEffect";
import UseContext from "./useContext/UseContext";

function App() {
  return (
    <>
      {/* <h3>Use Reducer</h3>
      <UseReducer />
      <hr />
      <h3>Use Effect</h3>
      <UseEffect /> */}

      <UseContext />
    </>
  );
}

export default App;
