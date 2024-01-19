import React, { useContext } from "react";
import { myContext } from "../Context/Context";
function ChildValue() {
  const { data } = useContext(myContext);
  return (
    <>
      {data.map((d, i) => {
        return (
          <div className="container-value" key={i}>
            <p>Nama : {d.nama}</p>
            <p>Nama : {d.umur}</p>
            <p>Nama : {d.lahir}</p>
          </div>
        );
      })}
    </>
  );
}

export default ChildValue;
