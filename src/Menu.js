import React, { Component } from 'react';

class Menu extends Component {
  render () {
    return (
        <div className='menu'>
            <ul className='ulMenu'>
                <li className='comoFunciona'><a href="#" className='sobreComoFunciona'>How it works</a></li>
                <li className='sobre'><a href="#" className='sobreLink'>About</a></li>
            </ul>
        </div>
    )
  }
}

export default Menu
