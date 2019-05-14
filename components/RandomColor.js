import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  constructor() {
    super();
    this.state = {
      height: '100px',
      width: '100px',
      backgroundColor: 'black'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setColor(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setColor() {
    this.setState({
      backgroundColor: generateRandomColor()
    });
  }

  render() {
    return (
      <div style={this.state}></div>
    );
  }

}

function generateRandomColor() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}
