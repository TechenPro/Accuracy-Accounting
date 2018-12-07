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
        const {date, day, modifierClass, title, time} = this.props;
        return (
            <div className={`${modifierClass ? `calendar-square_${modifierClass}` : 'calendar-square'} calendar-square-${day} `} id={modifierClass ? '' : `square-${date}`}>
                
                <a className='calendar-square_body' onClick={modifierClass ? '' : this.togglePopup.bind(this)}>
                    <label className='date'>{date}</label>
                    <label className='title'>{title ? title : "Open"}</label>
                    {title ? <label className='time'>{time}</label> : ""}
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

function mapStateToProps(state) {
    const {user} = state.auth;
    return {user};
}

export default connect(mapStateToProps, actions)(CalendarSquare);
