import React, { Component } from 'react';

export class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    console.log('Mouse event');

    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    console.log('mousemove');

    window.addEventListener('mousemove', this.logMousePosition, false);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition, false);
  }

  render() {
    return (
      <div>
        X: {this.state.x}, y: {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
