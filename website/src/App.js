import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Plant from './Plant';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1 className="App-title">Welcome to React</h1>
       <TextField
          id="textarea"
          label="Plant name"
          placeholder="name"
          className="bla clasje"
          margin="normal"
        />
        <Plant/>
        <Plant/>
        <Plant/>
      </div>
    );
  }
}

export default App;
