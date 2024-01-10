import React, { useEffect, useState } from "react";
import "./UseEffect.css";
import Todos from "./todos/Todos";

function UseEffect() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return <Todos todo={todo} />;
      })}
    </div>
  );
}

export default UseEffect;
