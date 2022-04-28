import React from 'react'
const ReceiverData = (props) => {
  return (
    <div>
        <button onClick={()=>props.ShowFun()}>Show Model</button>
    </div>
  )
}

export default ReceiverData;