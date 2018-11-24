import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from '../common/formFields';

class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className='login-form'>
                <h1>Log In to Continue...</h1>
                <Field
                    className='login-form_email'
                    placeholder='Enter Email'
                    name='email'
                    type='email'
                    title='Email'
                    component={FormInput}
                />
                <Field
                    className='login-form_password'
                    placeholder='Enter Password'
                    name='password'
                    type='password'
                    title='Password'
                    component={FormInput}
                />
                <Field
                    className='login-form_login'
                    name='login'
                    type='submit'
                    title='Login'
                    component={FormButton}
                />
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;
