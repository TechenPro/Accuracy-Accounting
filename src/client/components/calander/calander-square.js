import React, { Component } from 'react';

export default class CalanderSquare extends Component {
    render() {
        const {date, day, modifierClass, title, time} = this.props
        return (
            <div className={`${modifierClass ? `calander-square_${modifierClass}` : 'calander-square'} calander-square-${day} `} id={modifierClass ? '' : `square-${date}`}>
                <a className='calander-square_body'>
                    <label className='date'>{date}</label>
                    <label className='title'>{title ? title : "Open"}</label>
                    {title ? <label className='time'>{time}</label> : ""}
                </a>
            </div>
        )
    }
}
