import React, { Component } from 'react';

import ImageLink from './imageLink';
import Header from './header';
import IndustryCard from './industryCard';
import Footer from './footer';


export default class homePage extends Component {
    render() {
        return [
            <Header/>,
            <div className='city'>
                <ImageLink
                    imageurl = 'https://www.muralswallpaper.com/app/uploads/saturated-london-cityscape-city-plain.jpg'
                /> 
            
            </div>,           

            <div className ='servicesHolder'>
                <div className='title-services'>
                    Services
                </div>

                <div className='services-columns'>
                        <div className='services'>
                            <h1>TAXES</h1>
                            <ImageLink
                                imageurl='https://bfba.com/wp-content/uploads/2017/10/bfba_Tax-Icon-Blue.png'
                                linkUrl='/'
                            />
                        </div>

                        <div className='services'>
                            <h1>ASSURANCE</h1>
                            <ImageLink
                                imageurl='https://bfba.com/wp-content/uploads/2017/10/bfba_Assuance-Icon-Blue.png'
                                linkUrl='/'
                            />
                        </div>

                        <div className='services'>
                            <h1>ADVISORY</h1>
                            <ImageLink
                                imageurl='https://bfba.com/wp-content/uploads/2017/10/bfba_Advisory-Icon-Blue.png'
                                linkUrl='/'
                            />
                        </div>
                </div>
            </div>,

            <div className='industriesHolder'>
                <div className='title-industries'>
                    Industries
                </div>

                <div className='industries-cards'>
                    <IndustryCard/>
                    <IndustryCard />
                    <IndustryCard />
                </div>
            </div>,
                   
           <Footer />
        ]
    }
}
