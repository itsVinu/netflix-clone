import React, { Component } from 'react'
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Nav';
    
export default class Base extends Component {
  render() {
    return (
      <div className="base">
        <Nav />
        <Banner />
        <Row title='Netflix Originals' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title='Trending Now' fetchUrl = {requests.fetchTrending}/>
        <Row title='Top Rated' fetchUrl = {requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl = {requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl = {requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl = {requests.fetchDocumentaries}/>
      </div>
    )
  }
}
