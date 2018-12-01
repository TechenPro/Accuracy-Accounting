import React, { Component } from 'react';

export default class header extends Component {
    render() {
        return (
            <ul>
                <li><a class="active" href="/homePage">Home</a></li>
                <li><a href="#news">Services</a></li>
                <li><a href="/industryCard">Industries</a></li>
                <li><a href="#contact">Careers</a></li>
                <li><a href="#about">Insights</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Contact</a></li>
                <li><a href="/">Client Login</a></li>
            </ul>
        )
    }
}
