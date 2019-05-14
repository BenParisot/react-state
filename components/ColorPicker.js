import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
 
  render() {
    return (
            <>
            <button onClick={this.redHandler} style={{ background:'red' }}>Red</button>
            <button onClick={this.blueHandler} style={{ background:'blue' }}>Blue</button>
            <button onClick={this.yellowHandler} style={{ background:'yellow' }}>Yellow</button>
          </>
    );
  }
}
