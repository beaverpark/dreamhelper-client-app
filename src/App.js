import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Navbar from './Navbar'
import StickerBar from './StickerBar'
import Grid from '@material-ui/core/Grid';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />

        <Grid
          className='Main-container'
          container
          alignItems='stretch'
        >
          <Grid item xs={2}>
            <StickerBar />
          </Grid>
          <Grid item xs={5}>
            <Board />
          </Grid>
          <Grid item xs={5}>
            <Board />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
