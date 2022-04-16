import React from "react";

const PropReceiver = (props) => {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.address}</p>
        <p>{props.state}</p>
      </div>
    </>
  );
};
export default PropReceiver;