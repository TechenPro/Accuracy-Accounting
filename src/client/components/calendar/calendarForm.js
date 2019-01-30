import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton, FormSelector } from '../common/formFields';

class CalendarForm extends Component {
    render() {
        const {handleSubmit, handleCancel, date} = this.props;

        return (
            <form onSubmit={handleSubmit} className='calendar-form'>
                <h1>{`Schedule For ${date}`}</h1>
                <Field
                    className='calendar-form_client'
                    placeholder='Enter Company Name'
                    name='client'
                    type='text'
                    title='Name'
                    component={FormInput}
                />
                <Field
                    className="sign-up-form__email"
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                    title="Contact Email"
                    component={FormInput}
                />
                <Field
                    className='calendar-form_time'
                    name='time'
                    type='time'
                    title='Time'
                    options={{0:"12:00pm", 1:"1:00pm", 2:"2:00pm"}}
                    component={FormSelector}
                />
                <Field
                    className="sign-up-form__email"
                    placeholder="Enter Requested Service"
                    name="reason"
                    type="text"
                    title="Requested Service"
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