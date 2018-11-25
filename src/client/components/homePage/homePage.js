import React, { Component } from 'react';

import ImageLink from './imageLink';

export default class homePage extends Component {
    render() {
        return [
        
            <div className='crossHair'>
                <ImageLink
                    imageurl='https://www.wpclipart.com/signs_symbol/targets/crosshair/crosshair_1_large.png'
                    text='crosshair'
                    linkUrl="/homePage"
                />
            </div>,

            <div className='city'>
                <img src='https://www.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2017/11/Hong_Kong_Cedric009-1500x792.jpg'/>
                    {/* <imageLink
                    imageurl='https://wsww.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2017/11/Hong_Kong_Cedric009-1500x792.jpg'
                    text='city'
                    linkUrl='https://www.google.com'
                /> */}
            
            </div>,

            <div className='tax'>
                <h1>TAXES</h1>
                <img src='https://bfba.com/wp-content/uploads/2017/10/bfba_Tax-Icon-Blue.png'/>
            </div>,

            <div className = 'assurance' >
                <h1>ASSURANCE</h1>
                <img src='https://bfba.com/wp-content/uploads/2017/10/bfba_Assuance-Icon-Blue.png' />
            </div >,

            <div className='advisory' >
                <h1>ADVISORY</h1>
                <img src='https://bfba.com/wp-content/uploads/2017/10/bfba_Advisory-Icon-Blue.png' />
            </div >
        
            
        ]
    }
}




// crosshair img:    https://www.wpclipart.com/signs_symbol/targets/crosshair/crosshair_1_large.png
// city img:         https://www.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2017/11/Hong_Kong_Cedric009-1500x792.jpg