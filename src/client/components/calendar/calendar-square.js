import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import ScheduleForm from './calendarForm';

class CalendarSquare extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    onSubmit = (fields) => {
        fields["title"] = this.props.user.username;
        fields["date"] = this.props.date;
        this.props.newScheduleEvent(fields, () => {
            console.log("Scheduling Successful");
        })
        this.togglePopup();
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        const {date, modifierClass, title} = this.props;
        return (
            <div className={`${modifierClass ? `calendar-square_${modifierClass}` : 'calendar-square'} calendar-square-${date.getDay()} `} id={modifierClass ? '' : `square-${date.getDate()}`}>
                
                <a className='calendar-square_body' onClick={modifierClass ? null : this.togglePopup.bind(this)}>
                    <label className='date'>{date.getDate()}</label>
                    <label className='title'>{title ? title : "Open"}</label>
                </a>
                { this.state.showPopup ?
                <div className='popup'>
                    <div className='popup-inner'>
                        <ScheduleForm onSubmit={(event) => this.onSubmit(event)} handleCancel={this.togglePopup.bind(this)} />
                    </div>
                </div>
                : ''
                }
            </div>
        )
    }
}



export default connect(null, actions)(CalendarSquare);
