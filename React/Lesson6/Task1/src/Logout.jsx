import React, {Component} from 'react';

class Logout extends Component{
    render(){
    return (
        <button className="logout btn" onClick={this.props.onLogout}>
        Logout
        </button>)
    }
}

export default Logout