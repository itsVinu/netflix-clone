import React, { Component } from 'react'
import './Mid.css';

export default class Mid extends Component {
  render() {
    return (
        <div>
            <div className='middle_one'>
                <div className='middle__left'>
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast,Apple TV,Blu-ray players and more.</h2>
                </div>
                <div className='middle__right'>
                    {/* <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='failed to load refresh' /> */}
                    <video src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' controls muted autoPlay/>
                </div>
            </div>
            
            <div className='middle_one'>
                <div className='middle__right'>
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
                    
                </div>
                <div className='middle__left'>
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>
            
            <div className='middle_one'>
                <div className='middle__left'>
                    <h1>Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div className='middle__right'>
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' />
                    {/* <video src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' /> */}
                </div>
            </div>
            
            <div className='middle_one'>
                <div className='middle__right'>
                    <img
                        style={{width:'45vw'}}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFsEom83C8BaXC-pTC7mYUVBbKTmsLjGbvg&usqp=CAU' />
                    {/* <video src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' /> */}
                </div>
                <div className='middle__left'>
                    <h1>Create profiles for children.</h1>
                    <h2>Send children on adventures with their favourite characters in a space made just for them--free with your membership.</h2>
                </div>

            </div>
            
      </div>
    )
  }
}


