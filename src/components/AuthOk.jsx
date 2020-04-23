import React from "react";
import "./Auth.css"

export class AuthOk extends React.Component {
    render() {
        console.log(this.props.logOff)
        return (
            <div className={"content-box"}>
                <button onClick={this.props.logOff}>Выйти</button>
            </div>
        )
    }
}


export default AuthOk