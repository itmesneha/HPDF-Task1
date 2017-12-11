import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Flex_grid_column_wrap_left from './Flex_grid_column_wrap_left';
import Flex_grid_column_wrap_right from './Flex_grid_column_wrap_right';
import Flex_grid_column_wrap_centre from './Flex_grid_column_wrap_centre';

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
    flex: 1,
    height: '100%',
    width: '40%',
    margin: 10,
    textAlign: 'left',
    padding: 10,
    backgroundColor: '#f0f4c3'
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
          <Paper zDepth={3} style={styles.paperRight_top}>
              <Flex_grid_column_wrap_right />
          </Paper>
        </div>
      </div>
    )
  }
};

export default Flex_grid_row_wrap;
