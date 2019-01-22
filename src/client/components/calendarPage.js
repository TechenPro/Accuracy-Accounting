import React, { Component } from 'react';

import CalendarGrid from './calendar/calendar';

class CalendarPage extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            currentMonth: 0,
            currentYear: 2019,
            firstOfMonth: null
        }
    }

    componentWillMount(){
        this.setState({
            currentMonth: this.state.today.getMonth(),
            currentYear: this.state.today.getFullYear(),
            firstOfMonth: new Date(this.state.today.getFullYear(), this.state.today.getMonth(), 1)
        })
    }

    switchMonths = (value) => {
        this.state.firstOfMonth.setMonth(this.state.firstOfMonth.getMonth() + value);
        this.setState({
            currentMonth: this.state.firstOfMonth.getMonth(),
            currentYear: this.state.firstOfMonth.getFullYear()
        }, () => {
            this.setState({
                firstOfMonth: new Date(this.state.currentYear, this.state.currentMonth, 1)
            })
        })
        
    }

    render() {
        return ( 
            <div className='calendar-wrapper'>

        
                    <h1>Meeting Schedular</h1>
                    <h1 className='calendar-header'>{`${this.state.currentMonth} ${this.state.currentYear}`}</h1>
                    {console.log(this.state.firstOfMonth)}
                    <CalendarGrid today={this.state.today} firstOfMonth={this.state.firstOfMonth}/>
                    <button onClick={() => this.switchMonths(1)}/>
            </div>
        )
    }
}

export default CalendarPage;