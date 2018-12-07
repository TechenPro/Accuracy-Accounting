import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <div className = 'header-btn-holder'>
                < div className='header-btn-holder-left' >
                    <a className='header-btn' href="/services" > Services </a>
                    < a className = 'header-btn'href = "/insights" > Insights </a>
                    <a className='header-btn' href="/calendar">Schedule A Time</a>
                </div>

                <a className='header-center-logo' href="/homePage">
                    < img src = 'https://png2.kisspng.com/20180630/xxv/kisspng-shooting-target-target-corporation-clip-art-5b37f24f07bd91.8874108015303931670317.png'></img>
                </a>

                < div className='header-btn-holder-right' >
                    <a className='header-btn' href="/about">About</a>
                    <a className='header-btn' href="/contact">Contact</a>
                    <a className='header-btn' href="/">Client Login</a>
                </div>
            </div>
            )
        }
    }
