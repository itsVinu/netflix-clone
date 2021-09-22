import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Mid from './Mid';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
          <Nav />
        <Header />
        <Mid />
        <Footer />
        {/* <Link to='/netflix' >Try free for 30 days</Link> */}
      </div>
    )
  }
}
