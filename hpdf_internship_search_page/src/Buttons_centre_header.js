import React, { Component } from 'react';
import './App.css';
import FlatButton from 'material-ui/FlatButton';


class Buttons_centre_header extends Component {
  render() {
    return (
      <div style={{width: "100%"}}  className="Buttons_centre_header">
        <div style={{height: "10%"}}>
        <FlatButton label="Top" backgroundColor="#9fa8da" hoverColor="#7986cb" />
        <FlatButton label="Latest" backgroundColor="#f8bbd0" hoverColor="#f48fb1" />
        <FlatButton label="People" backgroundColor="#9fa8da" hoverColor="#7986cb" />
        <FlatButton label="Photos" backgroundColor="#f8bbd0" hoverColor="#f48fb1" />
        <FlatButton label="Videos" backgroundColor="#9fa8da" hoverColor="#7986cb" />
        <FlatButton label="News" backgroundColor="#f8bbd0" hoverColor="#f48fb1" />
        <FlatButton label="Broadcasts" backgroundColor="#9fa8da" hoverColor="#7986cb" />
      </div>
      </div>
    );
  }
}

export default Buttons_centre_header
