import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CalendarSquare from './calendar-square';

class CalendarGrid extends Component {

    componentWillMount() {
        this.props.fetchSchedule();
    }


    generateCalendar = (days, offset, current_date, events) => {
        let default_square = {title:'Locked', modifierClass:'locked'};
        let squares = [];
        let i;
        let key = 0;
        let runningOffset;
        const {eventList, dateList} = this.parseEventDates(events);

        if(offset) {
            for(i=1; i <= offset; i++) {
                squares.push(<CalendarSquare date={(30-offset) + i} day={i} {...default_square} key={key}/>)
                key++;
            }
        };

        for(i=1; i <= days; i++) {
            if(dateList.includes(i)){
                squares.push(<CalendarSquare {...eventList[i]} key={key} modifierClass='locked'/>);
            } else if(i <= current_date) {
                squares.push(<CalendarSquare date={i} day={i % 7 + offset} key={key} {...default_square}/>); 
            } else {
                squares.push(<CalendarSquare date={i} day={i % 7 + offset} key={key} handleSubmit={this.handleSubmit}/>);
            }


            runningOffset = i % 7 + offset;
            key++;
        }

        i = 1;
        while(squares.length < 42) {
            squares.push(<CalendarSquare date={i} day={i % 7 + runningOffset} {...default_square} key={key}/>);
            i++;
            key++;
        }

        return squares;
    }

    parseEventDates = (events) => {
        let eventList = {};
        let dateList = [];

        events.forEach(ev => {
            eventList[ev.date] = ev;
            dateList.push(ev.date)
        })

        return {eventList, dateList};
    }

    render() {
        const events = this.props.events;
        return (
            <div className='calendar'>
                {this.generateCalendar(31, 5, 7, events)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const events = state.events;
    // console.log('Mapping, Mapping');
    // console.log(events);
    return events;
}

CalendarGrid = connect(mapStateToProps, actions)(CalendarGrid);

export default CalendarGrid;
