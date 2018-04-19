import React, { Component } from 'react';

class TittleScreen extends Component {
  render () {
    return (
        <p className='tittle'>{this.props.tittle}</p>
    )
  }
}

export default TittleScreen
