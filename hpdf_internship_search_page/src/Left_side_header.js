import React, { Component } from 'react';
import './App.css';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

const Iconbuttonstyle = {
  margin: 20,
  padding: 10
}

class Left_side_header extends Component {
  render() {
    return (
      <div className="Left_side_header">
    <IconButton style={Iconbuttonstyle} tooltip="Home">
      <i class="material-icons">home</i>
    </IconButton>
      <Badge
        badgeContent={7}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}
      >
      <IconButton tooltip="Notifications">
        <i class="material-icons">notifications_none</i>
      </IconButton>
    </Badge>
    <Badge
     badgeContent={4}
     secondary={true}
     badgeStyle={{top: 12, right: 12}}
    >
     <IconButton tooltip="Messages">
       <i class="material-icons">mail_outline</i>
     </IconButton>
  </Badge>

   </div>
    );
  }
}

export default Left_side_header;
