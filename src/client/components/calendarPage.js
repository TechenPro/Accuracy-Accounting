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
                <CalendarGrid/>
                <Footer/>
            </div>
        )
    }
}

export default CalendarPage;