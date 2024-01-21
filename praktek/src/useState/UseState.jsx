import React, { useState } from "react";
const UseState = () => {
  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);
  console.log(name);
  return <input type="text" value={name} onChange={changeName} />;
};
export default UseState;
