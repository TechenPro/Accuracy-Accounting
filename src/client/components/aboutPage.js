import React, { Component } from 'react';

import Header from './homePage/header';
import Footer from './homePage/footer';
import ImageLink from './homePage/imageLink';

export default class about extends Component {
    render() {
        return [
            <Header />,

            <div className='about-page'>
                <div className='about-page-image'>
                    <ImageLink
                        imageurl='https://careersbuildingcommunities.org/wp-content/uploads/2018/01/squarePhoto_960x960_workers19_naa.jpg'
                        />
                </div>

                <div className='subheading'>
                    Our Goal
                </div>

                <div className='body-text'>
                    Our mission is to help our clients thrive by providing them with a professional service catered to their specific needs to better manage their finances. We seek to provide a higher quality service and make a difference to our clients and communities.
                <br /><br /><br /> <br /><br />
                </div>

                <div className='subheading'>
                    Accounting for Over 20 Years
                </div>

                <div className='body-text'>
                    In 1995, Taylor Jefferson went to his local accounting ferm for help with his taxes. After a disapointing experience, Taylor wondered if there was a better way to help people with their finances. With the help of his friends Garret Preston and Miles Corbett, Taylor drew up plans for a superior accounting ferm. A year latter, they opened Accuracy Accounting and have not only been helping their clients, but also helping thier community.
                    <br /><br /><br /> <br /><br />
                </div>

                <div className='subheading'>
                    Plans for the Future
                </div>

                <div className='body-text'>
                    We want to keep the same values we had when we opened over 20 years ago while still striving to become the best we posibily can be. It is our clients that keep us in business, and we aren't afraid of changeing to create better experience for you so we are always open to suggestions.
                    <br /><br /><br /> <br /><br />
                </div>
            </div>,

            <Footer />
        ]
    }
}
