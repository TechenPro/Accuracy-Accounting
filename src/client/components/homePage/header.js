import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <ul>
                <li><a class="active" href="/homePage">Home</a></li>
                <li><a href="#news">Services</a></li>
                <li><a href="/industries">Industries</a></li>
                <li><a href="#contact">Schedule A Time</a></li>
                <li><a href="#about">Insights</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#about">Contact</a></li>
                <li><a href="/">Client Login</a></li>
            </ul>
        )
    }
}
