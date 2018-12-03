import React, { Component } from 'react';

export default class Page404 extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-txt'>
                    <h1>Contact Us</h1><hr />
                    <br />
                    <h4>Phone: 1800-867-309</h4>
                    <h4>Email: dog@example.com</h4>
                    <h4>Fax: 1800-867-3101</h4>
                    <h4>Address: 19 Pennsylvania ave</h4>
                    <br /><br />
                </div>

                <div className='footer-txt'>
                    <h1>Navigation</h1><hr />
                    <br />
                    <a href='#'><h4>Services</h4></a>
                    <a href='/industries'><h4>Industry</h4></a>
                    <a href='#'><h4>Careers</h4></a>
                    <a href='#'><h4>Insights</h4></a>
                    <a href='/about'><h4>About</h4></a>
                    <a href='#'><h4>Contact</h4></a>
                    <a href='/'><h4>Client Login</h4></a>
                </div>

                <div className='footer-txt'>
                    <h1>Recent Insights</h1><hr />
                    <br />
                    <h4>2018-2019 Tax Planning Guide</h4>
                    <h4>In The News: Mapping the Next Move</h4>
                    <h4>Using Deferred Compensation Techniques To Meet Your Business Needs</h4>
                    <h4>How to Ensure Employee Loyalty in a Competitive Job Market</h4>
                    <h4>Intern Insights: The Importance of Culture</h4>
                </div>

            </div>
        )
    }
}
