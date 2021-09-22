import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul>
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>Account</li>
            <li>Media Centre</li>
        </ul>
        <ul>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways To Watch</li>
            <li>Terms To Use</li>
        </ul>
        <ul>
            <li>Privacy</li>
            <li>Cookies Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <ul>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only On Netflix</li>
        </ul>
      </div>
    )
  }
}
