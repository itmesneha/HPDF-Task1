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
                    width: '95%',
                    backgroundColor: '#e3f2fd'
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
          <TextField
            hintText="What's going on?"
            fullWidth='true'
          />
            <Card style={Cardstyle}>
              <CardHeader
                title="Hasura"
                subtitle="@HasuraHQ"
                avatar={"https://hasura.io/rstatic/resources/logo/Hasura-face-new.png"}
              />
              <CardText>
                Hi all. Our website is down for maintenance.
                You will not be able to create new projects for a few minutes. Existing
                projects will continue to work as is. Sorry for the inconvenience. We will be back up soon!
                <h4>#oops #waitasec</h4>
                <Divider />
              </CardText>
              <CardTitle subtitle="~Dec 9, 2017" />
              <CardActions>
                <FlatButton  icon={<i class="material-icons">textsms</i>} label="3"/>
                <FlatButton  icon={<i class="material-icons">cached</i>} label="5"/>
                <FlatButton  icon={<i class="material-icons">favorite_border</i>} label="6"/>
                <FlatButton  icon={<i class="material-icons">email</i>} />
                <IconMenu
                  iconButtonElement={<IconButton><i class="material-icons">keyboard_arrow_down</i></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="Copy link to Tweet" />
                  <MenuItem primaryText="Embed Tweet" />
                  <MenuItem primaryText="Mute @HasuraHQ" />
                  <MenuItem primaryText="Block @HasuraHQ" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br />
            <Card style={Cardstyle}>
              <CardHeader
                title="Google Cloud"
                subtitle="@googlecloud"
                avatar={"https://pbs.twimg.com/profile_images/781536991384965120/P7FviVzt_400x400.jpg"}
              />
              <CardText>
                Start your first VM for free with Google Compute Engine.
                <h4>#google #cloud</h4><br />
                <Divider />
              </CardText>
              <CardTitle subtitle="~Dec 6, 2017" />
              <CardMedia>
                 <img src="https://cloud.google.com/images/why-google/buildingblock.png" alt="" width='50' height='300' />
              </CardMedia>
              <CardActions>
                <FlatButton  icon={<i class="material-icons">textsms</i>} label="48"/>
                <FlatButton  icon={<i class="material-icons">cached</i>} label="30"/>
                <FlatButton  icon={<i class="material-icons">favorite_border</i>} label="120"/>
                <FlatButton  icon={<i class="material-icons">email</i>} />
                <IconMenu
                  iconButtonElement={<IconButton><i class="material-icons">keyboard_arrow_down</i></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="Copy link to Tweet" />
                  <MenuItem primaryText="Embed Tweet" />
                  <MenuItem primaryText="Mute @HasuraHQ" />
                  <MenuItem primaryText="Block @HasuraHQ" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br /><Card style={Cardstyle}>
              <CardHeader
                title="Troye Sivan"
                subtitle="@troyesivan"
                avatar={"https://pbs.twimg.com/profile_images/921507772394385408/cOhqvnU1_400x400.jpg"}
              />
              <CardText>
               Album Art!! <br />
               <h4>#music</h4><br />
               <Divider />
              </CardText>
              <CardTitle subtitle="~Dec 1, 2017" />
              <CardMedia>
                <img src="https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/7d/e9/e5/7de9e568-a8e5-9f86-d65a-49c1f305f2ac/UMG_cvrart_00602547600639_01_RGB72_1800x1800_15UMGIM55648.jpg/1200x630bb.jpg" height='500' width='50' />
              </CardMedia>
              <CardActions>
                <FlatButton  icon={<i class="material-icons">textsms</i>} label="46"/>
                <FlatButton  icon={<i class="material-icons">cached</i>} label="90"/>
                <FlatButton  icon={<i class="material-icons">favorite_border</i>} label="107"/>
                <FlatButton  icon={<i class="material-icons">email</i>} />
                <IconMenu
                  iconButtonElement={<IconButton><i class="material-icons">keyboard_arrow_down</i></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="Copy link to Tweet" />
                  <MenuItem primaryText="Embed Tweet" />
                  <MenuItem primaryText="Mute @HasuraHQ" />
                  <MenuItem primaryText="Block @HasuraHQ" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br /><Card style={Cardstyle}>
              <CardHeader
                title="Hasura Education"
                subtitle="@HasuraEd"
                avatar={"https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg"}
              />
              <CardText>
                IMAD at 1 year - A look at the numbers from India's largest MOOC on its birthday.
                <h4>#goMadiitsyourbirthday #1yearofIMAD #learntocode</h4><br />
                <Divider />
              </CardText>
              <CardTitle subtitle="~Nov 30, 2017" />
              <CardMedia>
                 <img src="https://pbs.twimg.com/media/DI84C6ZV4AAwOUf.png:large" alt="" width='50' height='300' />
              </CardMedia>
              <CardActions>
                <FlatButton  icon={<i class="material-icons">textsms</i>} label="28"/>
                <FlatButton  icon={<i class="material-icons">cached</i>} label="20"/>
                <FlatButton  icon={<i class="material-icons">favorite_border</i>} label="100"/>
                <FlatButton  icon={<i class="material-icons">email</i>} />
                <IconMenu
                  iconButtonElement={<IconButton><i class="material-icons">keyboard_arrow_down</i></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="Copy link to Tweet" />
                  <MenuItem primaryText="Embed Tweet" />
                  <MenuItem primaryText="Mute @HasuraHQ" />
                  <MenuItem primaryText="Block @HasuraHQ" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br /><Card style={Cardstyle}>
              <CardHeader
                title="Hasura"
                subtitle="@HasuraHQ"
                avatar={"https://hasura.io/rstatic/resources/logo/Hasura-face-new.png"}
              />
              <CardText>
              Hi Twitterverse! Hasura hub is up on @ProductHunt today (currently at #2 😍). <br />
              Do check us out on https://www.producthunt.com/  and show us some love (aka upvotes🤪).<br />
              <h4>#ProductHunt #appdev #webdev #MobileAppDevelopment</h4><br />
              <Divider />
              </CardText>
              <CardTitle subtitle="~Nov 27, 2017" />
               <img src="https://pbs.twimg.com/media/DQiNsckUQAExCOQ.jpg:large" alt="" width='600' height='500' />
              <CardActions>
                <FlatButton  icon={<i class="material-icons">textsms</i>} label="3"/>
                <FlatButton  icon={<i class="material-icons">cached</i>} label="5"/>
                <FlatButton  icon={<i class="material-icons">favorite_border</i>} label="6"/>
                <FlatButton  icon={<i class="material-icons">email</i>} />
                <IconMenu
                  iconButtonElement={<IconButton><i class="material-icons">keyboard_arrow_down</i></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="Copy link to Tweet" />
                  <MenuItem primaryText="Embed Tweet" />
                  <MenuItem primaryText="Mute @HasuraHQ" />
                  <MenuItem primaryText="Block @HasuraHQ" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br />
        </div>
      </div>
    )
  }
};

export default Flex_grid_column_wrap_right;
