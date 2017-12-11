import React, { Component } from 'react';
import './App.css';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Iconbuttonstyle = {
  margin: 20,
  padding: 10
}

const Raisedbuttonstyle = {
  margin:10,
  backgroundColor: 'green100'
}

class Right_side_header extends Component {
  render() {
    return (
      <div className="Right_side_header">
        <IconButton  style={Iconbuttonstyle} tooltip="Search">
           <i class="material-icons">search</i>
        </IconButton>
        <TextField
          hintText="Search"
        />
        <IconButton style={Iconbuttonstyle} tooltip="Me">
           <i class="material-icons">account_circle</i>
        </IconButton>
        <RaisedButton
          style={Raisedbuttonstyle}
      label="Tweet"
      labelPosition="after"
      icon={<i class="material-icons">send</i>}
    />

   </div>
    );
  }
}

export default Right_side_header;
