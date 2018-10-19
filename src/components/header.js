import React, { Component } from 'react';

// Here, the export statement has been merged into the class declaration.
export default class Header extends Component{

  render() {

    return(

      // Use `className=` instead of `class=` in JSX.
      <div className='header'>

        {/*
        Here we have regular HTML text along with some JS code.
        The JS code is accessing this objects own unique set of props.
        Props are made up of all the attributes passed into the Component Tag.
        Props are similar to class attributes for those familiar with Object Oriented Programming.
        Even though all the props are named the same, they may have different values for each instance.
        This is just like having 2 <img> tags. They both have a `src` and an `alt` attribute.
        However, the values of those attributes are different for the different <img> tags, thus rendering 2 different images.
        
        The keyword `this` is used by a component to refer to its own unique attribute values.
        That is why we see 3 different author names for the 3 different Header components that were rendered.
        */}
        This Site Was Made By: {this.props.author}

        <hr/>

      </div>
    )
      
  }
}
