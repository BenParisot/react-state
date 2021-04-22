import React, { PureComponent } from 'react';
import ColorDisplay from './ColorDisplay';

export default class ColorPicker extends PureComponent {
 state = {
   selectedColor: 'black'
 }

 clickHandler = event => {
   this.setState({ selectedColor: event.target.textContent }); console.log(event.target.textContent);
 }

 render() {
   return (
            <>
            <button onClick={this.clickHandler} style={{ background:'red' }}>red</button>
            <button onClick={this.clickHandler} style={{ background:'blue' }}>blue</button>
            <button onClick={this.clickHandler} style={{ background:'yellow' }}>yellow</button>
            <ColorDisplay color={this.state.selectedColor} />
          </>
   );
 }
}
