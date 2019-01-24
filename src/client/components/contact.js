import React, { Component } from 'react';

import Header from './homePage/header';
import Footer from './homePage/footer';
import ImageLink from './homePage/imageLink';

export default class contact extends Component {
    render() {
        return (
             <div className='contact'>
                <div className='contact-title'>Accuracy<hr></hr></div>
                <div className='contact-txt'>
                    <div className='contact-txt-left'>
                        Phone: 1(800)-867-5309<br></br>
                        Email: accuracy@mailinator.com<br></br>
                        Find us on social media:  
                        <div>
                             <a href='https://www.twitter.com/login'> <img className='contact-media-logo' src='./assets/footer-twitter.png'></img></a>
                             <a href='https://www.facebook.com/login'><img className='contact-media-logo' src='./assets/footer-facebook.png'></img></a>
                             <a href='https://www.linkedin.com'><img className='contact-media-logo' src='./assets/footer-linkedin.png'></img></a>
                        </div> 
                    </div>
                    <div className='contact-txt-right'>
                        Fax: 1(800)-867-3101 <br></br>
                        Address: 301 W Vine St, <br></br>
                        Tooele, Ut 84074
                    </div>
                    </div>
                </div>
//             <head>
//                 <meta charset='utf-8' />
//                 <title>Display a map</title>
//                 <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
//                 <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.js'></script>
//                 <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.css' rel='stylesheet' />
//                 <style>
//                     body {margin: 0; padding:0; }
//     #map {position: absolute; top:0; bottom:0; width:100%; }
//   </style>
//             </head>
//             <body>

//                 <div id='map'></div>
//                 <script>
//                     mapboxgl.accessToken = 'pk.eyJ1IjoidGhlb3JldGljYWxkb2N0b3IiLCJhIjoiY2pwZDh4OGFxMmtiNzN3cXM4NHZxM3c5ciJ9.bR8r-JscvverimD_AqZ4ZQ';
// const map = new mapboxgl.Map({
//                         container: 'map',
//                     style: 'mapbox://styles/theoreticaldoctor/cjpd8ylo67y2t2smn6yi0i6v3',
//                     center: [-122.403944, 37.784020],
//                     zoom: 13.6
//                   });
// </script>
//             </div>,

        )
    }
}
