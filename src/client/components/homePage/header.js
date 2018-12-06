import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <div className = 'header-btn-holder'>
                < div className='header-btn-holder-left' >
                    <a className='header-btn' href="/services" > Services </a>
                    < a className = 'header-btn'href = "#about" > Insights </a>
                    <a className='header-btn' href="#contact">Schedule A Time</a>
                </div>

                <a className='header-center-logo' href="/homePage">
                    < img src ='http://images.clipartpanda.com/crosshair-clipart-crosshair-hi.png'></img>
                </a>

                < div className='header-btn-holder-right' >
                    <a className='header-btn' href="/about">About</a>
                    <a className='header-btn' href="#about">Contact</a>
                    <a className='header-btn' href="/">Client Login</a>
                </div>
            </div>
            )
        }
    }
