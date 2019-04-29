import React, { Component } from 'react';
import Sticker from './Sticker'
import Grid from '@material-ui/core/Grid';

class StickerBar extends Component {

	state = {
		// stickers: [
		// 	{
		// 		name: 'smile',
		// 		color: 'yellow'
		// 	},
		// 	{
		// 		name: 'star',
		// 		color: 'red'
		// 	}
		// ]
	}

	componentDidMount() {
		console.log('Sticker Bar component did mount')

		// align stickers here 
		// this.setStickerPosition();
	}

	setStickerPosition = (size) => {
		console.log('set sticker position')
		console.log('size: ' + size)
	}

  render() {

  	let stickerElements = [];

  	// this.state.stickers.forEach((i) => {
  	// 	stickerElements.push(
  	// 			<div key={i.name}
  	// 					className={i.name}
	  // 					style={{backgroundColor: i.color}}
  	// 			>
  	// 				{i.name}
  	// 			</div>
  	// 		)
  	// })

    return (
      <Grid container className="StickerBar">
        <Grid item xs={6}>
        <Sticker
          // initialPosition={{x: 100,y: 100}}
          initialized={true}
          sendStickerSize={this.setStickerPosition}
         />        
        </Grid>
        <Grid item xs={6}>
        <Sticker
          // initialPosition={{x: 100,y: 100}}
          initialized={true}
          sendStickerSize={this.setStickerPosition}
         />        
        </Grid>


      </Grid>
    );
  }
}

export default StickerBar;