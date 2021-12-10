import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  renderTags() {
    if (this.state.tags.length)
      return (
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      )
    
    return <p>There are no Tags</p>
  }

  render() {

    return (
      <Fragment>
        { this.renderTags() }
      </Fragment>
    );
  }
}

export default Counter;
