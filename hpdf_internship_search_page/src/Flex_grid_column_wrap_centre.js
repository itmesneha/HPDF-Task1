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
import People from './People';


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
          <h3>People:</h3>
          <People />
          <br /> <br />
          <h3>Tweets:</h3>
            <Card style={Cardstyle}>
              <CardHeader
                title={<b>#GSAP</b>}
                subtitle="@Stormzy1"
                avatar={"https://pbs.twimg.com/profile_images/905534682137288705/iNnGTqid_400x400.jpg"}
              />
              <CardText>
            BBC Music Artist of the Year 2017.
            Another achievement courtesy of all the love and support you lot give me,
             here’s to another one. Forever grateful ❤️
                <h4>#bbcmusic #yay</h4>
                <Divider />
              </CardText>
              <CardTitle subtitle="~Dec 9, 2017" />
              <CardMedia>
                 <img src="https://pbs.twimg.com/media/DQm-YuBXcAA2Wk4.jpg:large" alt="" width='50%' height='100%' />
              </CardMedia>
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
                  <MenuItem primaryText="Mute @Stormzy1" />
                  <MenuItem primaryText="Block @Stormzy1" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br />
            <Card style={Cardstyle}>
              <CardHeader
                title={<b>Oh Wonder</b>}
                subtitle="@ohwonder"
                avatar={"https://pbs.twimg.com/profile_images/847411383826169856/E4bhS0oX_400x400.jpg"}
              />
              <CardText>
                Our Album is out now! New music!!
                <h4>#music #now #new</h4><br />
                <Divider />
              </CardText>
              <CardTitle subtitle="~Dec 6, 2017" />
              <CardMedia>
                 <img src="https://pbs.twimg.com/media/DQRKKqTX4AMoILv.jpg:large" alt="" width='50%' height='100%' />
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
                  <MenuItem primaryText="Mute @ohwonder" />
                  <MenuItem primaryText="Block @ohwonder" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br /><Card style={Cardstyle}>
              <CardHeader
                title={<b>Troye Sivan</b>}
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
                <img src="https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/7d/e9/e5/7de9e568-a8e5-9f86-d65a-49c1f305f2ac/UMG_cvrart_00602547600639_01_RGB72_1800x1800_15UMGIM55648.jpg/1200x630bb.jpg" height='100%' width='50%' />
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
                title={<b>Amy Winehouse</b>}
                subtitle="@amywinehouse"
                avatar={"https://pbs.twimg.com/profile_images/1457290066/amy1000_400x400.jpg"}
              />
              <CardText>
              NEWS: It's ‘Frank’s’ 10th Anniversary. One of the best records till date.
                <h4>#10years #amy #music</h4><br />
                <Divider />
              </CardText>
              <CardTitle subtitle="~Nov 30, 2017" />
              <CardMedia>
                 <img src="https://pbs.twimg.com/media/BXL4_mECUAATJ2p.jpg:large" alt="" width='50%' height='100%' />
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
                  <MenuItem primaryText="Mute @amywinehouse" />
                  <MenuItem primaryText="Block @amywinehouse" />
                  <MenuItem primaryText="Report Tweet" />
                  <Divider />
                  <MenuItem primaryText="Add to new Moment" />
              </IconMenu>
              </CardActions>
            </Card>
            <br /><Card style={Cardstyle}>
              <CardHeader
                title={<b>Billboard</b>}
                subtitle="@billboard"
                avatar={"https://pbs.twimg.com/profile_images/876878315256250369/Zkusf5bc_400x400.jpg"}
              />
              <CardText>
              Meet @LelePons, Instagram Stories' most-watched producer of 2017 and music's next star
              <h4>#billboard #newmusic #awards</h4><br />
              <Divider />
              </CardText>
              <CardTitle subtitle="~Nov 27, 2017" />
              <CardMedia>
               <img src="https://www.famousbirthdays.com/faces/pons-lele-image.jpg" alt="" width='50%' height='100%' />
             </CardMedia>
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
