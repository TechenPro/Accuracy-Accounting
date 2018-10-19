// Neccessary React Imports
import React from 'react';
import ReactDOM from 'react-dom';

//Pulls the main component into the site.
import App from './components/app';

// Default styles of bootstrap.
// import 'bootstrap/dist/css/bootstrap.css';

// Pulls main.scss into the site.
import './style/main.scss';


function main() {

  ReactDOM.render(

    /* 
    Renders the main component <App/> into the app-wrapper <div>
    Note how the `App` component is added like a custom HTML tag.
    */

    <App />
    , document.querySelector('.app-wrapper'));
    
}

// Runs the main() function once the ReactDOM has loaded.
document.addEventListener('DOMContentLoaded', main);
