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
                    Accounting < div className = 'city-text-sub-img'> <img src='http://images.clipartpanda.com/crosshair-clipart-crosshair-hi.png'></img></div>n-Point.
                    </div>
                </div>
                <ImageLink
                    className='centerImg'
                    imageurl = 'https://cdn.dribbble.com/users/7162/screenshots/1888419/open-uri20150119-12-2b4861'
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
                        description= 'No matter what you are struggling with, from financial reporting to simple questions, ask one of our construction members for help. We would be glad to assist you with your every need.' 
                    url='https://images.pexels.com/photos/162557/architecture-construction-build-building-162557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
                    link='#'/ >
                    < IndustryCard title = 'Real Estate'
                        description= 'Whether you are starting a new project, in the middle of an existing project, or considering an exit strategy, our team of trained professionals can help you at every turn. '
                    url= 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Not-for-Profit'
                        description= 'Accounting Accuracy is interested in making its community better, which is why it supports non-profit businesses. We work for every type of non-profit businesses including museums, schools and more.'
                    url= 'https://images.pexels.com/photos/1498963/pexels-photo-1498963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Professional Services'
                        description= 'Accounting Accuracy provides aid to all business, big or small. Our experienced team has the knowledge to help you in any industry regardless of the service you provide. '
                    url= 'https://images.pexels.com/photos/1345085/pexels-photo-1345085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Energy'
                        description = 'The FitnessGram Pacer Test...'
                    url= 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Transportation'
                        description = 'The FitnessGram Pacer Test...'
                    url= 'https://images.pexels.com/photos/243116/pexels-photo-243116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Agriculture'
                        description= 'Agriculture often requires specialized methods and knowledge. Our long history of accounting gives us the awareness and insight our clients need to give them first rate services to put you on the path to success. '
                    url= 'https://images.pexels.com/photos/175389/pexels-photo-175389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Property Managment'
                        description= 'The FitnessGram Pacer Test...'
                    url= 'https://images.pexels.com/photos/273683/pexels-photo-273683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Wholesale & Distribution'
                        description = 'The FitnessGram Pacer Test...'
                    url= 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Manufacturing'
                        description= 'Manufacturing is an old but important industry. We help our clients understand the changing and complex law surrounding this industry. '
                    url= 'https://images.pexels.com/photos/633850/machine-mill-industry-steam-633850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Communications'
                        description= 'Because of the varying circumstances, such as location and technology, it can be incredibly difficult to navigate. With over 20 years of experience, we have seen communication develop, and have become experts in this field.'
                    url= 'https://images.pexels.com/photos/270286/pexels-photo-270286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                    < IndustryCard title = 'Benefit Plans'
                        description = 'The FitnessGram Pacer Test...'
                    url= 'https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    link = '#' / >
                </div>
            </div>,
            <div className='insightHolder'>
                <div className='insight-title'>Insights</div>
                < div className = 'insight' >
                    <div className = 'insight-quote' >
                    "They helped my sue my ex-wife! And I won, too!" </div> 
                    <div className = 'insight-reference' >
                    -Harry S.Truman 
                    </div> 
                </div>
                <div className = 'insight' >
                    <div className = 'insight-quote' >
                    "They helped my ex-husband sue me! And I lost!" </div> 
                    <div className = 'insight-reference' >
                    -Harry S.Truman's Lesser Known Ex-Wife, Martha </div> 
                </div>
            </div>, 
           <Footer />
        ]
    }
}


{/* industry images were taken from https://www.pexels.com/photo-license/ and are royalty free */}