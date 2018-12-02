import React, {Component} from 'react';
import './Pictures.css'

let img = null;

class Pictures extends Component 
{

  render()
  {
    return (
      <div id = 'intro'>
        <h2 id = 'about'> Pictures of Cute Animals! </h2>
        <h3> Whenever you're feeling down and want some happiness in your life, we've got you covered :) </h3>
        {/* Bunch of pictures, maybe in grid format */}
      </div>
  );
  }
};

export default Pictures;