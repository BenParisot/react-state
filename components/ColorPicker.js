import React, { PureComponent } from 'react';
import ColorDisplay from './ColorDisplay';

export default class ColorPicker extends PureComponent {
 state = {
   selectedColor: ''
 }

 clickHandler = event => {
   this.setState({ selectedColor: event.target.textContent }); 
 }

 render() {
   return (
            <>
            <button onClick={this.clickHandler} style={{ background:'red' }}>Red</button>
            <button onClick={this.clickHandler} style={{ background:'blue' }}>Blue</button>
            <button onClick={this.clickHandler} style={{ background:'yellow' }}>Yellow</button>
            <ColorDisplay color={this.state.selectedColor} />
          </>
   );
 }
}
