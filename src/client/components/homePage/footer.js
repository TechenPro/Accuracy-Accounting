import React, { Component } from 'react';

export default class Page404 extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-txt'>
                    <div className='footer-txt-title'>
                        Contact Us<hr />
                    </div>
                    <div className='footer-txt-sub'>
                        <div className='footer-txt-sub-left'>
                            Phone: 1(800)-867-309<br></br>
                            Email: accuracy@mailinator.com
                        </div>
                        <div className='footer-txt-sub-right'>
                            Fax: 1(800)-867-3101 <br></br>
                            Address: 19 Pennsylvania Ave
                        </div>
                    </div>

                </div>

                <div className='footer-txt'>
                    <div className='footer-txt-title'>
                        Navigation<hr />
                    </div>
                    < div className = 'footer-txt-sub' >
                        <div className='footer-txt-sub-left'>
                            <a href='/services'>Services</a><br></br>
                            <a href='/insights'>Insights</a><br></br>
                            <a href ='#'> Schedule a Time</a>
                        </div>
                        <div className='footer-txt-sub-right'>
                            <a href='/about'>About</a><br></br>
                            <a href='/contact'>Contact</a><br></br>
                            <a href='/'>Client Login</a>
                        </div>
                    </div>
                </div>

                {/*<div className='footer-txt'>
                    <div className='footer-txt-title'>
                        Recent Insights<hr />
                    </div>
                    <h4>2018-2019 Tax Planning Guide</h4>
                    <h4>In The News: Mapping the Next Move</h4>
                    <h4>Using Deferred Compensation Techniques To Meet Your Business Needs</h4>
                    <h4>How to Ensure Employee Loyalty in a Competitive Job Market</h4>
                    <h4>Intern Insights: The Importance of Culture</h4>
                </div>*/}
                
                <div className='footer-legal'>
                    &copy;Copyright 2019 Accuracy < a href = '/legal' >More Info</a>
                </div>
            </div>
        )
    }
}
