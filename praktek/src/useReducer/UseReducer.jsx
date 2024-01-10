import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 1, nama: "" });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={handleIncrement} className="bg-blue">
        Increment
      </button>
      <p>{state.count}</p>
      <button onClick={handleDecrement} className="bg-red">
        Decrement
      </button>
    </div>
  );
}

export default UseReducer;
