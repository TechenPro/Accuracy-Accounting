// Imports the `React` module and the `Component` class from that module.
import React, { Component } from 'react';

// Creates an `App` class that is a child of the `Component` class.
class App extends Component {

  // The method that is called each time the class renders.
  render() {
    

    // Sends the content that actually gets rendered by the component onto the site.
    // ALL returned content MUST be nested inside a single tag.
    return (

      <div className='app'>

        { /* 
        Notice how you can use standard HTML tags, but this code comment is enclosed in curly brackets.
        JSX allows you to use HTML and JS at the same time- all that has to be done is to wrap any JS code in {}.
        */ }

        { /*
        Here we are rendering the Header component we imported above.
        This is done by using a self closing custom tag with the name of the component we are rendering.
        Just like any other HTML tage, we can pass in attributes- for example, the author attribute.
        These parameters are accessed by the component as `props`.
        We can also have multiple of the same component type- each different from each other in the rendering process.
        */ }
        WORKING!

      </div>

    );
  }
}

// Exports the `App` component so it can be rendered.
export default App;
