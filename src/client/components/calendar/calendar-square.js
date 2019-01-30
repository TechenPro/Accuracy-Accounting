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
        const date = this.props.date;
        const time = [12, 13, 14][fields['time']];
        date.setHours(time);
        fields["date"] = date.toString();
        this.props.newScheduleEvent(fields, () => {
            console.log("Scheduling Successful");
        })
        this.togglePopup();
        // console.log(date);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        const {date, modifierClass, title, client} = this.props;
        return (
            <div className={`${modifierClass ? `calendar-square_${modifierClass}` : 'calendar-square'} calendar-square-${date.getDay()} `} id={modifierClass ? '' : `square-${date.getDate()}`}>
                
                <a className='calendar-square_body' onClick={modifierClass ? null : this.togglePopup.bind(this)}>
                    <label className='date'>{date.getDate()}</label>
                    <label className='title'>{title ? title : "Open"}</label>
                    <label className='client'>{client ? client : ''}</label>
                </a>
                { this.state.showPopup ?
                <div className='popup'>
                    <div className='popup-inner'>
                        <ScheduleForm onSubmit={(event) => this.onSubmit(event)} handleCancel={this.togglePopup.bind(this)} date={date.toLocaleDateString("en-US")}/>
                    </div>
                </div>
                : ''
                }
            </div>
        )
    }
}



export default connect(null, actions)(CalendarSquare);
