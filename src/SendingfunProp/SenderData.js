import React, { useState } from "react";
import ReceiverData from "./ReceiverData";
const SenderData = () => {
  const [show, setShow] = useState(false);

  const ShowPopUp = () => {
    setShow(true);
  };
  return (
    <>
      <div>
        <ReceiverData ShowFun ={ShowPopUp} />
        {show ? <h1>Show Model Pop Up </h1> : null}
      </div>
    </>
  );
};

export default SenderData;
