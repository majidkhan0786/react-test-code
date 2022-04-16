// Hoc is take another components as an props and return  componet 
// we can say A components take another componets as an inputs and it will give as an output 

import React, { useState } from "react";
const HighOrderComp = () => {
  return (
    <>
      <div>
          <HocRed component = {Counter} />
          <HocGreen component = {Counter} />
          <HocBlue component = {Counter} />
      </div>
    </>
  );
};


function HocRed(props){
    return<>
    <h3>This components For BAckground Color rEd.</h3>
    <h3 style={{backgroundColor: "red"}} ><props.component/></h3>
    </>
}

function HocBlue(props){
    return<>
    <h3>This components For BAckground Color bLuE. </h3>
    <h3 style={{backgroundColor: 'skyblue'}} ><props.component/></h3>
    </>
}

function HocGreen(props){
    return<>
    <h3>This components For BAckground Color gReeN. </h3>
    <h3 style={{backgroundColor: 'green'}} ><props.component/></h3>
    </>
}


function Counter(){
    const [count, setCount]= useState(0);
    return(
        <>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increase Data </button>
        </>
    )
}

export default HighOrderComp;