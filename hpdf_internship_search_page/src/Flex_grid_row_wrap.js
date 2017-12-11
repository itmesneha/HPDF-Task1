import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Flex_grid_column_wrap_left from './Flex_grid_column_wrap_left';
import Flex_grid_column_wrap_centre from './Flex_grid_column_wrap_centre';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Cardstyle ={ backgroundColor: '#ffebee',
                    width: '90%'
 }


const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 100,
    width: '100%'
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    width: '40%',
    margin: 10,
    textAlign: 'left',
    padding: 10,
   backgroundColor: '#ede7f6'
  },
  paperCentre:{
    height: '100%',
    flex: 4.5,
    width: '60%',
    margin: 10,
    textAlign: 'left',
    padding: 10
  },
  paperRight_top:{
    flex: 3,
    height: '100%',
    width: '40%',
    margin: 10,
    textAlign: 'left',
    padding: 10,
    backgroundColor: '#f6ddcc'
  }
};

class Flex_grid_row_wrap extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>
          <Paper zDepth={3} style={styles.paperLeft}>
            <Flex_grid_column_wrap_left />
          </Paper>
          <Paper zDepth={3} style={styles.paperCentre}>
            <Flex_grid_column_wrap_centre />
          </Paper>
          <Paper zDepth={0} style={styles.paperRight_top}>
              <Card style={Cardstyle}>
                <CardHeader
                  title={<h2>Related Articles</h2>}
                  subtitle="Music"
                />
                <CardText>
                  <FlatButton label={<u>The best of Music: Michael Jackson!</u>} />
                  <FlatButton label={<u>Is music getting worse?</u>} />
                  <FlatButton label={<u>Song Sampling: Right or Wrong?</u>} />
                  <FlatButton label={<u>Do you really need a record label?</u>} />
                </CardText>
              </Card>
          </Paper>
        </div>
      </div>
    )
  }
};

export default Flex_grid_row_wrap;
