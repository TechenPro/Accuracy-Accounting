import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CalendarSquare from './calendar-square';
import { PassThrough } from 'stream';

class CalendarGrid extends Component {

    componentWillMount() {
        this.props.fetchSchedule();
    }

    // componentDidMount(){
    //     this.switchMonths(1);
    // }


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
                squares.push(<CalendarSquare date={squareDate} {...default_square} key={key}/>)
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
            else if(squareDate in dateList){
                squares.push(<CalendarSquare date={squareDate} {...default_square} key={key}/>)
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
        
        // if(events){
        //     events.forEach(ev => {
        //         evDate = new Date(ev.date);
        //         eventList[evDate.getDate()] = evDate;
        //         dateList.push(evDate.getDate())
        //     })
        // }
        // console.log(events);

        return {eventList, dateList};
    }

    render() {
        const {today, firstOfMonth} = this.props;
        const events = this.props.events;
        console.log(firstOfMonth);
        return (
            <div className='calendar'>
                {this.generateCalendar(today, firstOfMonth, events)}
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
