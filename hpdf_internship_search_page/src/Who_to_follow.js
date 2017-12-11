import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

const Cardstyle ={ backgroundColor: '#ffebee',
                    width: '90%'
 }

const styles = {
  div:{
    display: 'flex',
    flexFlow: 'column wrap',
    padding: 10,
    width: '100%'
  }

};

class Who_to_follow extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>
            <Card style={Cardstyle}>
              <CardHeader
                title="Billboard"
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
                title="EMI Music Aus"
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
            <Card style={Cardstyle}>
              <CardHeader
                title="Troye Sivan"
                subtitle="@troyesivan"
                avatar={"https://pbs.twimg.com/profile_images/921507772394385408/cOhqvnU1_400x400.jpg"}
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
                title="ac"
                subtitle="@alessiacara"
                avatar={"https://pbs.twimg.com/profile_images/938644294612631553/pRcu_QEe_400x400.jpg"}
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
            <br />



        </div>
      </div>
    )
  }
};

export default Who_to_follow;
