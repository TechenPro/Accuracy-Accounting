import React, { Component } from 'react';

import ImageLink from './imageLink';
import IndustryCard from './industryCard';


export default class homePage extends Component {
    render() {
        return( 
            <div className="homepage-wrapper">
                <div className='city'>
                    <div className='city-text'>
                        < div className = 'city-text-main' >
                        Accuracy
                        </div>

                    < div className = 'city-text-sub' >
                        Accounting < div className='city-text-sub-img' ><img src= './assets/header-logo.png' ></img></div> n - Point.
                    </div>
                </div>
                <img
                    className='centerImg'
                    src= './assets/homepage-animation.gif'
                /> 
            
            </div>

                <div className ='servicesHolder'>
                    <div className='title-services'>
                        Services
                    </div>

                <div className='services-columns'>
                        <div className='services'>
                            <h1>TAXES</h1>
                            <ImageLink
                            imageurl= './assets/homepage-taxes.png'
                                linkUrl='/services#taxes'
                            />
                        </div>

                        <div className='services'>
                            <h1>ASSURANCE</h1>
                            <ImageLink
                            imageurl= './assets/homepage-assurance.png'
                                linkUrl='/services#assurances'
                            />
                        </div>

                        <div className='services'>
                            <h1>ADVISORY</h1>
                            <ImageLink
                            imageurl='./assets/homepage-advisory.png'
                                linkUrl='/services#advisory'
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
                        url='./assets/industries-construction.png' 
                            linkUrl='/industries#construction' 
                            />
                    < IndustryCard title = 'Real Estate'
                        description= 'Whether you are starting a new project, in the middle of an existing project, or considering an exit strategy, our team of trained professionals can help you at every turn. '
                        url= './assets/industries-realestate.png'
                        linkUrl='/industries#realestate'
                    />
                    < IndustryCard title = 'Not-for-Profit'
                        description= 'Accuracy is interested in making its community better, which is why it supports non-profit businesses. We work for every type of non-profit businesses including museums, schools and more.'
                        url= './assets/industries-nonprofit.png'
                        linkUrl='/industries#nonprofit'
                    />
                    < IndustryCard title = 'Professional Services'
                        description= 'Accuracy provides aid to all business, big or small. Our experienced team has the knowledge to help you in any industry regardless of the service you provide. '
                        url= './assets/industries-professionalservices.png'
                        linkUrl='/industries#professionalservices'
                            />
                    < IndustryCard title = 'Energy'
                        description= 'It is important to work with a team of advisors that know the complexity of the energy industry so you can address important industry issues.'
                        url= './assets/industries-energy.png'
                        linkUrl='/industries#energy'
                        />
                    < IndustryCard title = 'Transportation'
                        description= 'The transportation industry is surprisingly technical and regulated industry. Our transportation team has the skills and experience necessary to understand and help you with these logistics.'
                        url= './assets/industries-transportation.png'
                        linkUrl='/industries#transportation'
                        />
                    < IndustryCard title = 'Agriculture'
                        description= 'Agriculture often requires specialized methods and knowledge. Our long history of accounting gives us the awareness and insight our clients need to give them first rate services to put you on the path to success. '
                        url= './assets/industries-agriculture.png'
                        linkUrl='/industries#agriculture'
                        />
                    < IndustryCard title = 'Property Managment'
                        description= 'Our experience with all aspects of the real estate industry provide us with the knowledge to advise you in this similar industry. '
                        url= './assets/industries-propertymanagment.png'
                        linkUrl='/industries#propertymanagement'
                        />
                    < IndustryCard title = 'Wholesale & Distribution'
                        description= 'No matter what wholesale and distribution issue you have we have the knowledge and experience to ensure you keep accurate order fulfillment and delivery.'
                        url= './assets/industries-wholesale&distribution.png'
                        linkUrl='/industries#wholesale&distribution'
                        />
                    < IndustryCard title = 'Manufacturing'
                        description= 'Manufacturing is an old but important industry. We help our clients understand the changing and complex law surrounding this industry. '
                        url= './assets/industries-manufacturing.png'
                        linkUrl='/industries#manufacturing'
                        />
                    < IndustryCard title = 'Communications'
                        description= 'Because of the varying circumstances, such as location and technology, it can be incredibly difficult to navigate. With over 20 years of experience, we have seen communication develop, and have become experts in this field.'
                        url= './assets/industries-communications.png'
                        linkUrl='/industries#communications'
                        />
                    < IndustryCard title = 'Benefit Plans'
                        description= 'At Accuracy we ensure the highest quality services leaving our clients with the highest quality results so that they can see their business expand and grow.'
                        url= './assets/industries-benefitplans.png'
                        linkUrl='/industries#benefitplans'
                        />
                </div>
            </div>,
            <div className='insightHolder'>
                <div className='insight-title'>Insights</div>
                < div className = 'insight' >
                    <div className = 'insight-quote' >
                    "Accuracy has provided accounting services for my business for the past couple of years. The customer service has been exceptional. I have and will continue to recommend the company's services to my fellow business owners." 
                    </div>
                    <div className = 'insight-reference'>
                    - Wilfred Greningwich
                    </div>
                    </ div>
                    <div className = 'insight'>
                    <div className = 'insight-quote' >
                    "It is all thanks to Accuracy that my business is still afloat. They came with their outstanding team of highly capable accountants and got us out of the financial hole we had gotten ourselves into." 
                    </div>
                    <div className = 'insight-reference'>
                    - Janice Hilfred
                    </div>
                </div>
            </div>
            </div>
    )
    }
}


{/* industry images were taken from https://www.pexels.com/photo-license/ and are royalty free */}