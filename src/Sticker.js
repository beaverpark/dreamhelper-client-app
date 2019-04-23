import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Sticker extends Component {

  constructor(props) {
    super(props);
    this.stickerRef = React.createRef();
  }

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
		dragging: false,
    rel: null // mouse position relative to the component x, y
	}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dragging && !prevState.dragging) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    } else if (!this.state.dragging && prevState.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
      
      // TODO
      this.setState({
        initialPosition: {x: 0, y: 0}
      })
    }
  }

  onMouseDown = (e) => {
    console.log('mouseDown')

    // allow left mouse button only
    if (e.button !== 0) return;

    const stickerPosition = this.stickerRef.current.getBoundingClientRect();

    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - stickerPosition.left, // mouse position x - sticker position x
        y: e.pageY - stickerPosition.top  // mouse position y - sticker position y
      }
    });
    
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseUp = (e) => {
    console.log('mouseUp')
    this.setState({dragging: false});
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseMove = (e) => {

    console.log('mouseMove')

  	if (!this.state.dragging) return;

	 	this.setState({
      position: {
        x: e.pageX - this.state.rel.x,  // setting sticker position x
        y: e.pageY - this.state.rel.y  // setting sticker position y
      }
    });

    e.stopPropagation();
    e.preventDefault();
  }

  render() {
   //  console.log(this.state.dragging)
  	console.log(this.state.position)

    return (
      <div
        ref={this.stickerRef}
        // draggable
      	className="Sticker"
      	style={{width:50, 
                height:50, 
                backgroundColor: 'red', 
                position: this.state.dragging ? 'absolute' : 'static', 
                left: this.state.position.x + 'px', 
                top: this.state.position.y + 'px'}}
        onMouseDown={this.onMouseDown}
      >
      </div>
    );
  }
}

export default Sticker;



