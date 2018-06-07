import React, { Component } from 'react';

export default class Plant extends Component {

  test() {
    // https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
    return <h1>time left: {this.props.TimeLeft}</h1>
  }

  render() {
    return (
      <div>
        Image
        plantName {this.test()} 
      </div>
    ) 
  }
}