import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Cardstyle ={ backgroundColor: '#d1c4e9',
                    width: '90%'
 }

const Menustyle = {
   backgroundColor: '#ede7f6'
}

const styles = {
  div:{
    display: 'flex',
    flexFlow: 'column wrap',
    padding: 10,
    width: '100%'
  }
};

class Flex_grid_column_wrap_left extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>

          <Card style={Cardstyle}>
            <CardHeader
              title="sneh"
              subtitle="@sneha_sns"
              avatar={<i class="material-icons">account_circle</i>}
            />
            <CardActions>
              <Divider />
              <FlatButton
                label="Tweets 0"
              backgroundColor="#F6DDCC"
              hoverColor="#EDBB99"
            />
            <FlatButton
              label="Followers 5"
            backgroundColor="#F6DDCC"
            hoverColor="#EDBB99"
          />
          <FlatButton
            label="Following 10"
          backgroundColor="#F6DDCC"
          hoverColor="#EDBB99"
        />
            </CardActions>
          </Card>


            <Menu style={Menustyle}>
              <MenuItem primaryText={<h2>Trends</h2>} />
              <Divider />
              <MenuItem primaryText={<h4>#MarriageEqualityAus (102k tweets)</h4>} />
              <MenuItem primaryText={<h4>#TedTalks (300k tweets)</h4>} />
              <MenuItem primaryText={<h4>#FinalsWeek (100k tweets)</h4> } />
              <MenuItem primaryText={<h4>#AppsOverTheWorld (90k tweets)</h4>} />
            </Menu>

        </div>
      </div>
    )
  }
};

export default Flex_grid_column_wrap_left;
