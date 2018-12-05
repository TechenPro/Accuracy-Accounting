import React, { Component } from 'react';

import ImageLink from './imageLink';
import Header from './header';
import IndustryCard from './industryCard';
import Footer from './footer';


export default class homePage extends Component {
    render() {
        return [
            <Header/>,
            <div className='headerSpacer'></div>,
            <div className='city'>
                <div className='city-text'>
                    < div className = 'city-text-main' >
                    Accuracy
                    </div>

                    < div className = 'city-text-sub' >
                    Accounting On-Point.
                    </div>
                </div>
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
                    < IndustryCard title = 'Construction'
                    description = 'The FitnessGram Pacer Test...' 
                    url='https://www.placecage.com/900/900' 
                    link='#'/ >
                    < IndustryCard title = 'Real Estate'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Not-for-Profit'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Professional Services'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Energy'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Transportation'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Agriculture'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Property Managment'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Wholesale & Distribution'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Manufacturing'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Communications'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                    < IndustryCard title = 'Benefit Plans'
                    description = 'The FitnessGram Pacer Test...'
                    url = 'https://www.placecage.com/900/900'
                    link = '#' / >
                </div>
            </div>,
            <div className='insightHolder'>
                <div className='insight-title'>Insights</div>
            </div>, 
           <Footer />
        ]
    }
}
