import React, { Component } from 'react';

import ImageLink from './imageLink';

export default class industryCard extends Component {
    render() {
        return [
            <div className='crossHair'>
            industryCard
                <ImageLink
                    imageurl='https://www.wpclipart.com/signs_symbol/targets/crosshair/crosshair_1_large.png'
                    
                    linkUrl="/homePage"
                />
            </div>,

            // <div className='container'>s
            //     <img src='http://www.globalblue.com/tax-free-shopping/belgium/article641237.ece/alternates/LANDSCAPE2_970/Grand-Place-with-colorful-lighting-at-Dusk-in-Brussels-belgium.jpg' className='image'/>
            //     <div className='overlay'>
            //     <div className='text'>hello</div>
            // </div>
            // </div>,

            <div className='animation2'>
                <img src='http://www.globalblue.com/tax-free-shopping/belgium/article641237.ece/alternates/LANDSCAPE2_970/Grand-Place-with-colorful-lighting-at-Dusk-in-Brussels-belgium.jpg'/>
            </div>
        ]
    }
}



{/* <ImageLink
                    imageurl='http://www.globalblue.com/tax-free-shopping/belgium/article641237.ece/alternates/LANDSCAPE2_970/Grand-Place-with-colorful-lighting-at-Dusk-in-Brussels-belgium.jpg'
                    text='animated one'
                    // linkUrl="/homePage"
                /> */}