import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LoginForm from './loginForm';

class Login extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            console.log("Login Successful");
        })
    }

    render() {
        return(
            <div className='login'>
            < div className = 'bgAnimation' >
                <img src = 'https://i.pinimg.com/originals/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267.jpg' ></img></div>
                <LoginForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Login);
