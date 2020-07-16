import React, { Component } from 'react';
import Login from './Login'
import Logout from './Logout'
import Spinner from './Spinner';


//1. devide for subtasks
//2. for each subtask make algo
//3. test each subtask(!!!) & use debag all the time
//4. read documentation

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isProccessing: false
        }
    }

    //Algo
    //1. isProccessing = true;
    //2. after 2sec.isProccessing = false;
    onLogin = () => {
        this.setState({
            isProccessing:true
        })

    setTimeout(() => {
        this.setState({
            isLoggedIn:true,
            isProccessing:false
        })
    }, 5000)

    onLogout = () => {
        this.setState({
            isLoggedIn:true,
            isProccessing:false
        });
    };

    render() {
        const {isLoggedIn, isProccessing} = this.state;

        if(isProccessing){
            return <Spinner size={100}/>
        }
        if(isProccessing){
            return <Spinner size={100}/>
        }
        return <Login  onLogin={this.Login}/>
        return <Logout />
    }
};

export default Auth;