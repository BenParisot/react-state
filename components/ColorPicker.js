import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
    state = {
      background: 'grey',
      height: '100px',
      width: '100px'
    }

    colors = ['red', 'blue', 'yellow']

    clickHandler = event => {
      this.setState({ background: event.target.textContent });
    }
    
    render() {
      const buttons = this.colors.map(color => {
        return <button key={color} onClick={this.clickHandler} style={{ background: color }}>{color}</button>;

      });

      return (
        <>
            {buttons}
            <div style={this.state}></div>
        </>
      );
    }
}
