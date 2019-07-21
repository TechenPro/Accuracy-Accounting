import React, { Component } from 'react';


export default class about extends Component {
    render() {
        return (

            <div className='about-page'>
                <div className='about-page-image'>
                    <img src='./assets/about.png' />
                </div>

                <div className='about-page-subheading'>
                    Our Goal
                </div>

                <div className='about-page-body'>
                    Our mission is to help our clients thrive by providing them with a professional service catered to their specific needs to better manage their finances. We seek to provide a higher quality service and make a difference to our clients and communities.
                
                </div>

                <div className='about-page-subheading'>
                    Accounting for Over 20 Years
                </div>

                <div className='about-page-body'>
                    In 1995, Taylor Jefferson went to his local accounting firm for help with his taxes. After a disappointing experience, Taylor wondered if there was a better way to help people with their finances. With the help of his friends Garret Preston and Miles Corbett, Taylor drew up plans for a superior accounting firm. A year later, they opened Accuracy and have not only been helping their clients, but also helping their community.                    
                </div>

                <div className='about-page-subheading'>
                    Plans for the Future
                </div>

                <div className='about-page-body'>
                    We want to keep the same values we had when we opened over 20 years ago while still striving to become the best we possibly can be. It is our clients that keep us in business, and we aren't afraid of changing to create a better experience for you, so we are always open to suggestions.                    
                </div>
            </div>
        )
    }
}
