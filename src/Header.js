import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        {/* <Nav  className='header__nav'/> */}
        <div className='inner__div'></div>
        <div className='header__content'>

            <h1>Unlimited movies, TV shows<br /> and more.</h1>
            <h2>WATCH ANYWHERE. CANCEL ANYTIME</h2>
            <Link to='/netflix' className='btn'>WATCH FREE FOR 30 DAYS</Link>
      </div>
      </div>
    )
  }
}
