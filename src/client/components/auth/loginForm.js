import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from '../common/formFields';

class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className='login-form'>
                < div className = 'login-form_title' > Client Login {/*< a href = "/homePage" > < img src = 'https://png2.kisspng.com/20180630/xxv/kisspng-shooting-target-target-corporation-clip-art-5b37f24f07bd91.8874108015303931670317.png'></img></a>*/}</div>
                <div className="login-form_inner">
                    <Field
                        className='login-form_inner_email'
                        placeholder='Enter Username'
                        name='username'
                        type='username'
                        title='Username'
                        component={FormInput}
                    />
                    <Field
                        className='login-form_inner_password'
                        placeholder='Enter Password'
                        name='password'
                        type='password'
                        title='Password'
                        component={FormInput}
                    />
                    <Field
                        className='login-form_inner_login'
                        name='login'
                        type='submit'
                        title='Login'
                        component={FormButton}
                    />
                    </div>
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;
