import React, { Component } from 'react';

export default class CalanderSquare extends Component {
    render() {
        const {date, title, time, day} = this.props
        return (
            <div className={`calander-square calander-square-${day}`} id={`square-${date}`}>
                <a className='calander-square_body'>
                    <label className='date'>{date}</label>
                    <label className='title'>{title ? title : "Open"}</label>
                    {title ? <label className='time'>{time}</label> : ""}
                </a>
            </div>
        )
    }
}
