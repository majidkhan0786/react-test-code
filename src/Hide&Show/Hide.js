import React, { useState } from "react";

const Hide = () => {
  const [Hide, setHide] = useState(false);
  return (
    <>
      {Hide ? <h1>This Content will Show an Hiide </h1> : null}
      <button onClick={() => setHide(false)}>Hide</button>
      <button onClick={() => setHide(true)}>Show</button>
    </>
  );
};
export default Hide;