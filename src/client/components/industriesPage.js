import React, { Component } from 'react';

import Header from './homePage/header';
import Footer from './homePage/footer';
import ImageLink from './homePage/imageLink';

export default class industries extends Component {
    render() {
        return [
            <Header />,
        
            <div className='industries-page'>
                <div className='heading'>
                    Industries
                </div>

                <div className='body-text-center'>
                    At Accuracy Accounting we help our clients with all financing from all industries. With over 20 years of business, we have extensive experiance in many specific industries allowing us to provide the best possible service to our clients. With so much experiance under our belt, we are experts in providing advice that meets your every accounting need in these industries.
                    <br /><br /><br /><br />
                </div>

                <div className='industries-image'>
                    <ImageLink
                        imageurl='https://cdnassets.hw.net/8b/16/ad10b7644b379890958adca8b519/construction.jpg'
                    />
                </div>

                <div className='subheading'>
                    Construction
                </div>

                <div className='body-text'>
                    We have decades worth of experience with this industry allowing us to put our vast knowledge to work for you. We understand the importance of this industry and take care in  providing the best possible assistance. We have experts who can meet with you and help regardless of your needs.
                    <br /> <br />
                    No matter what you struggling with, from financial reporting to simple questions, ask one of our construction members for help. We would be glad to assist you with your every need.
                    <br /> <br />
                    We can assist you with all you construction needs including:
                </div>
                <div className='industries-bullets'>
                    <br />
                    <li>Bonding and Bandking relationships</li> <br />
                    <li>Cash flow management</li> <br />
                    <li>Construction software recommendations</li> <br />
                    <li>Multi-stage operations</li> <br />
                    <li>General strategic planning</li>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>


                <div className='industries-image'>
                    <ImageLink
                        imageurl='https://cdnassets.hw.net/8b/16/ad10b7644b379890958adca8b519/construction.jpg'
                    />
                </div>
                
                <div className='subheading'>
                    Construction
                </div>

                <div className='body-text'>
                    We have decades worth of experience with this industry allowing us to put our vast knowledge to work for you. We understand the importance of this industry and take care in  providing the best possible assistance. We have experts who can meet with you and help regardless of your needs.
                    <br /> <br />
                    No matter what you struggling with, from financial reporting to simple questions, ask one of our construction members for help. We would be glad to assist you with your every need.
                    <br /> <br />
                    We can assist you with all you construction needs including:
                </div>
                <div className='industries-bullets'>
                    <br />
                    <li>Bonding and Bandking relationships</li> <br />
                    <li>Cash flow management</li> <br />
                    <li>Construction software recommendations</li> <br />
                    <li>Multi-stage operations</li> <br />
                    <li>General strategic planning</li>
                    <br /><br /><br /><br />
                </div>
            </div>,

            <Footer />
        ]
    }
}
