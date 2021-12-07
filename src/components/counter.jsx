import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  // old way of rebinding 'this' -- solved by arrow function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //arrow function prevents 'this' from rebinding to windows obj
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });

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
      <Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //we do not call the method/function: we are passing a reference
          style={this.style}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
