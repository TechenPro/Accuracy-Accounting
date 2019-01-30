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
        this.months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ]
    }

    componentWillMount(){
        this.setState({
            todaysMonth: this.state.today.getMonth(),
            currentMonth: this.state.today.getMonth(),
            currentYear: this.state.today.getFullYear(),
            firstOfMonth: new Date(this.state.today.getFullYear(), this.state.today.getMonth(), 1)
        })
    }

    switchMonths = (value) => {
        if(this.state.currentMonth + value <= this.state.todaysMonth + 3 || this.state.currentYear < 2019){
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
    }

    render() {
        return ( 
            <div className='calendar-wrapper'>

        
                    <h1>Meeting Schedular</h1>
                    <div className='calendar-header'>
                        <h1>{`${this.months[this.state.currentMonth]} ${this.state.currentYear}`}</h1>
                        <button className='prev-month'onClick={() => this.switchMonths(-1)}/>
                        <button className = 'next-month' onClick={() => this.switchMonths(1)}/>
                    </div>
                    <CalendarGrid today={this.state.today} firstOfMonth={this.state.firstOfMonth}/>
            </div>
        )
    }
}

export default CalendarPage;