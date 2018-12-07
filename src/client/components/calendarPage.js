import React, { Component } from 'react';

import CalendarGrid from './calendar/calendar';
import Header from './homePage/header';
import Footer from './homePage/footer';

class CalendarPage extends Component 
{
    render() {
        return ( 
            <div>
                <Header/>
                <div className='headerSpacer'></div>
                <div className='calendar-wrapper'>
                    <h1>Meeting Schedular</h1>
                    <h1 className='calendar-header'>December</h1>
                    <CalendarGrid/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CalendarPage;