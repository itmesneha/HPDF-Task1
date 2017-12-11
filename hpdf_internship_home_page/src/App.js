import React, { Component } from 'react';
import './App.css';
import Twitter_header from './Twitter_header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flex_grid_row_wrap from './Flex_grid_row_wrap';

const Styleapp = {
  width: '100%'
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div style={Styleapp} className="App">
          <Twitter_header />
          <Flex_grid_row_wrap />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
