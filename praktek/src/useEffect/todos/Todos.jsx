import React from "react";

function Todos({ todo }) {
  const { completed, title } = todo;

  return (
    <div className="todos">
      <div className={`${completed ? "bg-green" : "bg-red"}`}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Todos;
