import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import StickerBar from './StickerBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />

{/*
        <Grid
          className='Main-container'
          container
          alignItems='stretch'
        >
          <Hidden smDown>
            <Grid item sm={2}>
              <StickerBar />
            </Grid>
          </Hidden>
          <Grid item xs={6} sm={5}>
            <Board />
          </Grid>
          <Grid item xs={6} sm={5}>
            <Board />
          </Grid>
        </Grid>
*/}

        <div className='main-section'>
          <StickerBar className='sticker-bar' />
          <Board className='board' />
          <Board className='board' />
        </div>


      </div>
    );
  }
}

export default App;
