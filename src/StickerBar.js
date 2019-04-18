import React, { Component } from 'react';
import Sticker from './Sticker'

class StickerBar extends Component {

	state = {
		stickers: [
			{
				name: 'smile',
				color: 'yellow'
			},
			{
				name: 'star',
				color: 'red'
			}
		]
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
      <div className="StickerBar">
        <Sticker
          initialPosition={{x: 100,y: 100}}
         />
      </div>
    );
  }
}

export default StickerBar;