import React, { PureComponent } from 'react';

export default class Counter extends PureComponent {
    state = {
      count: 0
    }

    handleClick = () => {
      this.setState(state => {
        return {
          count: state.count + 1
        };
      });
    } 

    render() {
      return (
            <>
            <p>Total Count: {this.state.count}</p>
            <button onClick={this.handleClick}>Click me to count!</button>
            </>
      );
    }

}
