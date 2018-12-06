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
                <LoginForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Login);
