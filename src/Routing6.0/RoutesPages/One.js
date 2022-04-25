import React from "react";
import { useNavigate } from "react-router-dom";
const One = () => {
  const navigate = useNavigate();
  const navTopage = () => {
    let x = true;
    if (x) {
      navigate("/two");
    } else {
      navigate("/three");
    }
  };
  return (
    <>
      <div>
        <h1>One</h1>
        {/* <button onClick={()=> navigate('/two')}>Go to Two </button> */}
         {/* <button onClick={()=>navigate('/three')}>Go to Three </button> */}
        {/* Conditionally Routing with function  */}
        <button onClick={() => navTopage()}>Go to Two </button>
        <button onClick={() => navTopage()}>Go to Three </button>
      </div>
    </>
  );
};
export default One;
