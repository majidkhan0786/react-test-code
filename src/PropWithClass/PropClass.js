import React from "react";

class ClassProp extends React.Component{
    render(){
        
        return(
            <>
            <h1>Props in Class Component</h1>
            <p>Student Name :{this.props.Student}</p>
            <p>Email id: {this.props.email}</p>
            <p>Address :{this.props.Address}</p>
            <p>Degree: {this.props.Degree}</p>
            </>
        )
    }
}
export default ClassProp;