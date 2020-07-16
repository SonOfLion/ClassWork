import React, {Component} from 'react'

class Login extends Component{
    render(){

    return (
        <button className="login btn"
            onCLick={this.props.onLogin}>
            Login
        </button>)
    }
}

export default Login