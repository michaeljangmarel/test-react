import React, { Component } from 'react'

class ErrorCommon extends Component{


    constructor(props){
        super(props);
        this.state = {hasError : false}
    }

    static getDriveStateError(){
        return {hasError : true};
    }


    render(){
        if(this.state.hasError){
            return <p>error </p>
        }
        return this.props.children;
    }
}


export default ErrorCommon