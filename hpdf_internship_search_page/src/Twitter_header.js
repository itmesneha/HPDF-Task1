import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Left_side_header from './Left_side_header';
import Right_side_header from './Right_side_header';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Buttons_centre_header from './Buttons_centre_header';

const appbarCustomization ={ backgroundColor: '#b2dfdb',
                              width: '100%',
                              position: 'fixed'
                            }


class Twitter_header extends Component {
  render() {
    return (
      <div style={{width: "100%"}}  className="twitter_header">
        <div style={{height: "10%"}}>
        <AppBar style={appbarCustomization} title={<Buttons_centre_header /> }
         iconElementRight={<Right_side_header />}
         iconElementLeft={<Left_side_header />}
         >
        </AppBar>
      </div>
      </div>
    );
  }
}

export default Twitter_header;
