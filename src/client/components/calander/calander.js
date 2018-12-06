import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CalanderSquare from './calander-square';

export default class Calander extends Component {

    generateCalander = (days, offset) => {
        let squares = [];
        let i;
        for(i=1; i <= days; i++) {
            squares.push(<CalanderSquare date={i} day={i % 7 + offset}/>)
        }
        return squares;
    }

    render() {
        const days = 31;
        return (
            <div className='calander'>
                {this.generateCalander(31, 2)}
            </div>
        )
    }
}
