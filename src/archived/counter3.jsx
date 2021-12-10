//pre single source of truth

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  // old way of rebinding 'this' -- solved by arrow function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //arrow function prevents 'this' from rebinding to windows obj
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });

    //console.log('Increment Clicked', this.state.count);
    // obj.method();  //'this' is referencing obj
    // function()  // 'this' is referencing windown obj - in strict mode = undefined
  };

  //setting attribute
  style = {
    fontSize: 12,
    fontWeight: 'bold',
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement} //we do not call the method/function: we are passing a reference of it
          style={this.style}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.value === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
