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

class Flex_grid_column_wrap_right extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>

            <h3>Who to Follow?</h3>
            <Card style={Cardstyle}>
              <CardHeader
                title="Hasura"
                subtitle="@HasuraHQ"
                avatar={"https://hasura.io/rstatic/resources/logo/Hasura-face-new.png"}
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
                title="Narendra Modi"
                subtitle="@narendramodi"
                avatar={"https://pbs.twimg.com/profile_images/908031632606609408/zDNPfHoo_400x400.jpg"}
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
                title="Hasura Education"
                subtitle="@HasuraEd"
                avatar={"https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg"}
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

            <Card style={Cardstyle}>
              <CardText>2017 Copyright Tweetah <br /> </CardText>
              <CardActions>
                <Divider />
                <FlatButton label="About"
                  backgroundColor="#F9E79F  "
                  hoverColor="#D5F5E3"
                  icon={<i class="material-icons">info_outline</i>} />
                <FlatButton label="Help"
                  backgroundColor="#F9E79F  "
                  hoverColor="#D5F5E3"
                  icon={<i class="material-icons">help_outline</i>} />

              </CardActions>
            </Card>

        </div>
      </div>
    )
  }
};

export default Flex_grid_column_wrap_right;
