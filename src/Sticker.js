import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sticker extends Component {

	static propTypes = {
		initialPosition: PropTypes.shape({
			x: PropTypes.number.isRequired,
			y: PropTypes.number.isRequired
		})
	}

	static defaultProps = {
		initialPosition: {x: 0, y: 0}
	}

	state = {
		position: this.props.initialPosition,
		dragging: false
	}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dragging && !prevState.dragging) {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    } else if (!this.state.dragging && prevState.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }
  }

  onMouseMove = (e) => {
  // 	if (!this.state.dragging) return;

  	console.log(e)

	 // 	this.setState({
  //     position: {
  //       x: e.pageX - this.state.rel.x,
  //       y: e.pageY - this.state.rel.y
  //     }
  //   })
  //   e.stopPropagation();
  //   e.preventDefault();
  }

  render() {
  	console.log("state =\n")
  	console.log(this.state)

    return (
      <div 
      	className="Sticker"
      	style={{width:50, height:50, backgroundColor: 'red'}}
      	onMouseMove={this.onMouseMove}
      >
      </div>
    );
  }
}

export default Sticker;



