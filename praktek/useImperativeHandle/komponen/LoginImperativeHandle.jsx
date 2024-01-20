import React, { useState, forwardRef, useImperativeHandle } from "react";

function LoginImperativeHandle(props, ref) {
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsLogin((login) => !login);
  };

  useImperativeHandle(ref, () => ({
    setLogin: handleClick,
    tampilHello: () => {
      alert("Hello world");
    },
  }));
  return (
    <div>
      <div className="">
        <ul>
          <li>
            <a href="#home" onClick={handleClick} className={isLogin ? "bg-red" : "bg-green"}>
              {isLogin ? "login dari child komponen " : "logout dari child komponen"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default forwardRef(LoginImperativeHandle);
