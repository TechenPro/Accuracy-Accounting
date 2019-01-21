import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <div className = 'header-btn-holder'>
                < div className='header-btn-holder-left' >
                    <a className='header-btn' href="/services" > Services </a>
                    < a className = 'header-btn'href = "/insights" > Insights </a>
                    <a className='header-btn' href="/client-schedular">Schedule A Time</a>
                </div>

                <a className='header-center-logo' href="/">
                    < img src = './assets/header-logo.png'></img>
                </a>

                < div className='header-btn-holder-right' >
                    <a className='header-btn' href="/about">About</a>
                    <a className='header-btn' href="/contact">Contact</a>
                    <a className='header-btn' href="/login">Client Login</a>
                </div>
            </div>
            )
        }
    }
