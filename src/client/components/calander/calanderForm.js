import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from '../common/formFields';

class CalanderForm extends Component {
    render() {
        const {handleSubmit, handleCancel} = this.props;

        return (
            <form onSubmit={handleSubmit} className='calander-form'>
                <h1>Log In to Continue...</h1>
                <Field
                    className='calander-form_time'
                    placeholder='Enter Email'
                    name='time'
                    type='time'
                    title='Time'
                    component={FormInput}
                />
                <Field
                    className='calander-form_cancel'
                    name='cancel'
                    type='cancel'
                    title='Cancel'
                    onClick={handleCancel}
                    component={FormButton}
                />
                <Field
                    className='calander-form_submit'
                    name='schedule'
                    type='submit'
                    title='Schedule'
                    component={FormButton}
                />
            </form>
        )
    }
}

CalanderForm = reduxForm({
    form: 'calander'
})(CalanderForm);

export default CalanderForm;