import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const incrementNumber = () => setNumber(number + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return number % 2 === 0;
  }, [number]);

  return (
    <div className="App">
      <button onClick={incrementNumber}>number : {number}</button>
      <div>{isNumberEven ? "even" : "odd"}</div>
      <button onClick={incrementCount}>count: {count}</button>
    </div>
  );
}
export default UseMemo;
