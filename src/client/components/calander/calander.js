import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CalanderSquare from './calander-square';

class CalanderGrid extends Component {

    componentWillMount() {
        this.props.fetchSchedule();
    }


    generateCalander = (days, offset, events) => {
        let default_square = {title:'Locked', modifierClass:'locked'};
        let squares = [];
        let i;
        let key = 0;
        let runningOffset;
        const {eventList, dateList} = this.parseEventDates(events);

        if(offset) {
            for(i=1; i <= offset; i++) {
                squares.push(<CalanderSquare date={(30-offset) + i} day={i} {...default_square} key={key}/>)
                key++;
            }
        };

        for(i=1; i <= days; i++) {
            if(dateList.includes(i)){
                squares.push(<CalanderSquare {...eventList[i]} key={key} handleSubmit={this.handleSubmit}/>);
            } else {
                squares.push(<CalanderSquare date={i} day={i % 7 + offset} key={key} handleSubmit={this.handleSubmit}/>); 
            }


            runningOffset = i % 7 + offset;
            key++;
        }

        i = 1;
        while(squares.length < 42) {
            squares.push(<CalanderSquare date={i} day={i % 7 + runningOffset} {...default_square} key={key}/>);
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
            <div className='calander'>
                {this.generateCalander(31, 5, events)}
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

CalanderGrid = connect(mapStateToProps, actions)(CalanderGrid);

export default CalanderGrid;
