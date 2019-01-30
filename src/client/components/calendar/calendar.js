import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CalendarSquare from './calendar-square';
import { PassThrough } from 'stream';

class CalendarGrid extends Component {

    componentWillMount() {
        this.props.fetchSchedule();
    }

    generateCalendar = (today, firstOfMonth, events) => {
        const default_square = {title:' ', modifierClass:'locked'};
        let squares = [];

        const {eventList, dateList} = this.parseEventDates(events);
        const offset = firstOfMonth.getDay();

        //Loop Controllers
        let i;
        let key = 0;

        if(offset){
            for(i=offset; i>0; --i){
                let squareDate = new Date(firstOfMonth);
                squareDate.setDate(squareDate.getDate() - i);
                if(squareDate <= today){
                squares.push(<CalendarSquare date={squareDate} {...default_square} key={key}/>)
            }
            else if (dateList.indexOf(`${squareDate.getDate()}/${squareDate.getMonth()}`) >= 0) {
                squares.push(<CalendarSquare date={squareDate} title='Booked' client={eventList[`${squareDate.getDate()}/${squareDate.getMonth()}`].client} key={key} modifierClass='locked'/>)            }
            else{
                squares.push(<CalendarSquare date={squareDate} key={key} handleSubmit={this.handleSubmit}/>)
            }
                key++;
            }
        }

        i = 0;
        while(squares.length < 42){
            let squareDate = new Date(firstOfMonth);
            squareDate.setDate(squareDate.getDate() + i);

            if(squareDate <= today){
                squares.push(<CalendarSquare date={squareDate} {...default_square} key={key}/>)
            }
            else if (dateList.indexOf(`${squareDate.getDate()}/${squareDate.getMonth()}`) >= 0) {
                squares.push(<CalendarSquare date={squareDate} title='Booked' client={eventList[`${squareDate.getDate()}/${squareDate.getMonth()}`].client} key={key} modifierClass='locked'/>)
            }
            else{
                squares.push(<CalendarSquare date={squareDate} key={key} handleSubmit={this.handleSubmit}/>)
            }
            i++;
            key++;
        }

        return squares;
    }

    parseEventDates = (events) => {
        let eventList = {};
        let dateList = [];
        console.log(events);
        
        if(events){
            events.forEach(ev => {
                let evDate = new Date(ev.date);
                dateList.push(`${evDate.getDate()}/${evDate.getMonth()}`);
                eventList[`${evDate.getDate()}/${evDate.getMonth()}`] = ev;
            })
        }

        return {eventList, dateList};
    }

    render() {
        const {today, firstOfMonth} = this.props;
        const events = this.props.events;
        return (
            <div className='calendar'>
                {this.generateCalendar(today, firstOfMonth, events)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const events = state.events;
    return events;
}

CalendarGrid = connect(mapStateToProps, actions)(CalendarGrid);

export default CalendarGrid;
