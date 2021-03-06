import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  //setting attribute
  style = {
    fontSize: 12,
    fontWeight: 'bold'
  };

  render() {

    return (
      <Fragment>
        <span  className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button style={this.style} className='btn btn-secondary btn-sm'>Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul>
      </Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
