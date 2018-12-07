import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from '../common/formFields';

class CalendarForm extends Component {
    render() {
        const {handleSubmit, handleCancel} = this.props;

        return (
            <form onSubmit={handleSubmit} className='calendar-form'>
                <h1>Log In to Continue...</h1>
                <Field
                    className='calendar-form_time'
                    placeholder='Enter Email'
                    name='time'
                    type='time'
                    title='Time'
                    component={FormInput}
                />
                <Field
                    className='calendar-form_cancel'
                    name='cancel'
                    type='cancel'
                    title='Cancel'
                    onClick={handleCancel}
                    component={FormButton}
                />
                <Field
                    className='calendar-form_submit'
                    name='schedule'
                    type='submit'
                    title='Schedule'
                    component={FormButton}
                />
            </form>
        )
    }
}

CalendarForm = reduxForm({
    form: 'calendar'
})(CalendarForm);

export default CalendarForm;