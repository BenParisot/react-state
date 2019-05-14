import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
    state = {
      background: 'grey',
      height: '100px',
      width: '100px'
    }

    clickHandler = event => {
      this.setState({ background: event.target.textContent });
    }
    
    render() {
      return (
        <>
            <button onClick={this.clickHandler} style={{ background:'red' }}>Red</button>
            <button onClick={this.clickHandler} style={{ background:'blue' }}>Blue</button>
            <button onClick={this.clickHandler} style={{ background:'yellow' }}>Yellow</button>
            <div style={this.state}></div>
        </>
      );
    }
}
