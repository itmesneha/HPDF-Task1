import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


const Cardstyle ={
                    width: '80%',
                    backgroundColor: '#f3e5f5'
 }

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 10,
    width: '94%'
  }

};

class People extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>

          <Card style={Cardstyle}>
            <CardHeader
              title={<b>Billboard</b>}
              subtitle="@Billboard"
              avatar={"https://pbs.twimg.com/profile_images/876878315256250369/Zkusf5bc_400x400.jpg"}
            />
            <CardActions>
              <FlatButton
                label="Follow"
              backgroundColor="#D3DAE1"
              hoverColor="#A3BAD3"
              icon={<i class="material-icons">check_circle</i>}
            />
            </CardActions>
          </Card>
          <Card style={Cardstyle}>
            <CardHeader
              title={<b>EMI Music AU</b>}
              subtitle="@EMIMusicAU"
              avatar={"https://pbs.twimg.com/profile_images/654472334997237760/zUSF06CQ_400x400.png"}
            />
            <CardActions>
              <FlatButton
                label="Follow"
              backgroundColor="#D3DAE1"
              hoverColor="#A3BAD3"
              icon={<i class="material-icons">check_circle</i>}
            />
            </CardActions>
          </Card>
          <br /> <br />
      </div>
    </div>
    )
  }
};

export default People;
