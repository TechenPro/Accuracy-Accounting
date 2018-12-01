import React, { Component } from 'react';

import Header from './header';
import ImageLink from './imageLink';

export default class industryCard extends Component {
    render() {
        return [

            <div className='industryCard'>
                <div className='card-description'><h2>
                    Officially the Kingdom of Belgium, is a country in Western Europe bordered by the Netherlands to the north, Germany to the east, Luxembourg to the southeast, France to the southwest, and the North Sea to the northwest.                </h2>
                </div>
                <div className='card img'>
                    <ImageLink
                        imageurl='http://www.globalblue.com/tax-free-shopping/belgium/article641237.ece/alternates/LANDSCAPE2_970/Grand-Place-with-colorful-lighting-at-Dusk-in-Brussels-belgium.jpg'
                        linkUrl="https://en.wikipedia.org/wiki/Belgium"
                    />
                <div className='card-txt'><h1>Belgium</h1></div>
                </div>
            </div>          

        ]
    }
}
