import React, { Component } from 'react';


export default class contact extends Component {
    render() {
        return (
             <div className='contact'>
                <div className='contact-title'>Accuracy</div><hr></hr>
                <div className='contact-body'>
                    At Accuracy we stay in contact with our clients. We keep communication as clear and straight forward as possible so don't hesitate to contact one of our officials. You can also check our twitter for the latest news from Accuracy.
                </div>
                <div className='contact-txt'>
                    <div className='contact-txt-left'>
                        Phone: 1(800)-867-5309<br></br>
                        Fax: 1(800)-867-3101 <br></br>
                        Email: accuracy@mailinator.com<br></br>
                        Address: 301 W Vine St, <br></br>
                        Tooele, Ut 84074<br></br>
                        Find us on social media:  

                        <div className='smHolder'>
                        <a href='https://twitter.com/AccountingAccu1'> <img className='contact-media-logo' src='./assets/footer-twitter.png'></img></a>
                        <a href='https://www.facebook.com/login'><img className='contact-media-logo' src='./assets/footer-facebook.png'></img></a>
                        <a href='https://www.linkedin.com'><img className='contact-media-logo' src='./assets/footer-linkedin.png'></img></a>
                       </div>
                    </div>
                    <div className='contact-txt-right'>
                        
                        <a className="twitter-timeline" href="https://twitter.com/AccountingAccu1">Tweets by Accuracy</a>
                        
                    </div>
                </div>
            </div>

        )
    }
}
