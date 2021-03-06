import React, { Component } from 'react';
import { NavLink } from "react-router-dom"


export default class insights extends Component {
    render() { 
        return (
            <div className='insights'>

                <div className="faq" >

                    <div className="faq-right-column">
                        <div className='insights-heading'>
                            FAQ
                        </div>

                        <div className='insights-subheading'>
                            How much do you charge for your services?
                        </div>

                        <div className='faq-answers'>
                            Each of our services are charged differently, and greatly depend on varying circumstances. Contact us for a free quote. You can find our contact information
                            <NavLink className='insights-link' to='/contact'> here</NavLink>.
                        </div>

                        <div className='insights-subheading'>
                            Can small businesses use your services?
                        </div>

                        <div className='faq-answers'>
                            All companies can use our services regardless of its size. We also help individuals with the same services. We help all companies no matter what industry they are in.
                        </div>

                        <div className='insights-subheading'>
                            How do I set up a meeting?
                        </div>

                        <div className='faq-answers'>
                            You can schedule a meeting at any open time slot
                            <NavLink className='insights-link' to='/client-schedular'> here</NavLink>.
                            You can also send us and email or give us a call for smaller inquires. Our contact information can be found
                            <NavLink className='insights-link' to='/contact'> here</NavLink>.
                        </div>
                    </div>   

                    <div className="faq-left-column">
                        <div className='insights-img'>
                            <img src='./assets/insights.png' />
                        </div>
                    </div>
                </div> 

                    <div className="testimonials-wrapper">
                        <div className='insights-heading-testimonials'>
                            Testimonials
                        </div>

                        <div className='testimonials'>
                            <div className='testimonial-box'>
                                "Accuracy helped my firm with our taxes and caught a flaw that saved us hundreds of dollars." <br />-Emily Maris
                            </div>

                            <div className='testimonial-box'>
                                "Accuracy gave me advice that helped me reach my financial goals in half the expected time." <br /> -Ethan Stanley
                            </div>

                            <div className='testimonial-box'>
                                "Accuracy look at my business and helped me cut cost, maintain efficiency, and increase profit." <br />-Alexis Henson
                            </div> 
                   
                            <div className='testimonial-box'>
                                "I went to Accuracy when my firm was about to go bankrupt, now we are out of debt and making money." <br />-Shaun Cura
                            </div>

                            <div className='testimonial-box'>
                                "In just one meeting all my quesions were answered and my financial problems were as good as gone." <br /> -Josie Bosch
                            </div>

                            <div className='testimonial-box'>
                                "After countless disapointing meetings with other firms I tried Accuracy and ended up saving money." <br />-Zach Snider
                            </div>
                        </div>
                    </div>
                </div>
          
        )
    }
}
