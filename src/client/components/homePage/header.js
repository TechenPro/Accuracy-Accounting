import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <div className = 'header-btn-holder'>
                < div className='header-btn-holder-left' >
                    <a className='header-btn' href="/services" > Services </a>
                    < div className = 'header-btn' > < a className = 'header-btn-link'href = "#about" > Insights </a></div >
                    <div className='header-btn'><a className='header-btn-link' href="#contact">Schedule A Time</a></div>
                </div>

                <div className='header-center-logo'>
                    < img src ='http://images.clipartpanda.com/crosshair-clipart-crosshair-hi.png'></img>
                </div>

                < div className='header-btn-holder-right' >
                    <div className='header-btn'><a className='header-btn-link' href="/about">About</a></div>
                    <div className='header-btn'><a className='header-btn-link' href="#about">Contact</a></div>
                    <div className='header-btn'><a className='header-btn-link' href="/">Client Login</a></div>
                </div>
            </div>
            )
        }
    }
