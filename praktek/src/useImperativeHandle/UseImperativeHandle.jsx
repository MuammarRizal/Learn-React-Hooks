import React, { useRef } from "react";
import LoginImperativeHandle from "./komponen/LoginImperativeHandle";

function UseImperativeHandle() {
  const loginRef = useRef();
  return (
    <main>
      <LoginImperativeHandle ref={loginRef} />
      <div className="container">
        parent komponen :
        <button href="#home" onClick={() => loginRef.current.setLogin()}>
          Login dari parent
        </button>
        <button onClick={() => loginRef.current.tampilHello()}>Click Me!</button>
      </div>
    </main>
  );
}

export default UseImperativeHandle;
