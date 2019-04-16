import React, { Component } from 'react';


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

  	this.state.stickers.forEach((i) => {
  		stickerElements.push(
  				<div key={i.name}
  						className={i.name}
	  					style={{backgroundColor: i.color}}
  				>
  					{i.name}
  				</div>
  			)
  	})


  	console.log(stickerElements)

    return (
      <div className="StickerBar">
      	{stickerElements}
      </div>
    );
  }
}

export default StickerBar;