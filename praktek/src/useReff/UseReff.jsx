import React, { useRef, useState } from "react";

function UseReff() {
  const inputRef = useRef(null);
  const inputRefDat = useRef(null);
  const [dataDom, setDataDom] = useState("");
  const fucus = () => {
    alert("tolong isi field nya terlebih dahulu");
    inputRef.current.focus();
  };

  const changeInput = (e) => {
    setDataDom(e.target.value);
  };

  const clickValue = () => {
    console.log("nilai input : ", dataDom);
  };

  return (
    <div>
      <input type="text" ref={inputRef} name="input-ref" onChange={changeInput} />
      <button onClick={dataDom.length > 0 ? clickValue : fucus}>Fokus to input</button>
    </div>
  );
}

export default UseReff;
