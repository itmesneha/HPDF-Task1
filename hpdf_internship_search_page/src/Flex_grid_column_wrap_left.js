import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Who_to_follow from './Who_to_follow';


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

          <Card style = {Cardstyle}>
   <CardHeader
     title={<h2>Search Filters</h2>}
     subtitle="(Expand to show)"
     actAsExpander={true}
     showExpandableButton={true}
   />

   <CardText expandable={true}>
     <CardActions>
       <SelectField
        floatingLabelText="From anyone">
        <MenuItem value={false} primaryText="From anyone" />
        <MenuItem value={true} primaryText="People you follow" />
      </SelectField>
      <br />
     <SelectField
      floatingLabelText="Anywhere">
      <MenuItem value={false} primaryText="Anywhere" />
      <MenuItem value={true} primaryText="Near you" />
    </SelectField>
    <br />
    <SelectField
     floatingLabelText="All languages"
      >
     <MenuItem value={false} primaryText="Arabic" />
     <MenuItem value={true} primaryText="Hindi" />
     <MenuItem value={true} primaryText="English" />
     <MenuItem value={true} primaryText="German" />
     <MenuItem value={true} primaryText="Hebrew" />
     <MenuItem value={true} primaryText="Burmese" />
     <MenuItem value={true} primaryText="Bengali" />
     <MenuItem value={true} primaryText="Dutch" />
   </SelectField>
   <br />
    <Divider />
       <FlatButton label="Advanced Search" />
     </CardActions>
   </CardText>
 </Card>
          <br />

          <Card style ={Cardstyle}>
    <CardHeader
      title={<h2>Related Searches</h2>}
    />

    <CardText>
      <CardActions>
        <Menu style={Menustyle}>
          <MenuItem primaryText={<u>Top Music</u>} />
          <MenuItem primaryText={<u>Billboard</u>} />
          <MenuItem primaryText={<u>Universal Music</u> } />
          <MenuItem primaryText={<u>Record Label</u>} />
          <MenuItem primaryText={<u>Capitol Records</u>} />
        </Menu>
      </CardActions>
    </CardText>
  </Card>
  <br />
  <Card style = {Cardstyle}>
    <CardHeader
      title={<h2>Who to follow?</h2>}
    />
  <Who_to_follow />
</Card>
<br />



            <Menu style={Menustyle}>
              <MenuItem primaryText={<h2>Trends</h2>} />
              <Divider />
              <MenuItem primaryText={<h4>#MarriageEqualityAus (102k tweets)</h4>} />
              <MenuItem primaryText={<h4>#TedTalks (300k tweets)</h4>} />
              <MenuItem primaryText={<h4>#FinalsWeek (100k tweets)</h4> } />
              <MenuItem primaryText={<h4>#AppsOverTheWorld (90k tweets)</h4>} />
            </Menu>
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
            <br />

        </div>
      </div>
    )
  }
};

export default Flex_grid_column_wrap_left;
