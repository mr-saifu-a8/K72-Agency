import React from 'react'
import Video from '../components/home/Video'
import HeroText from '../components/home/HeroText'
import BottomText from './../components/home/BottomText';

function Home() {
  return (
    <div>
      <div className='w-screen h-screen  fixed'>
        <Video/>
      </div>
      <div className='w-screen h-screen overflow-hidden relative flex justify-between flex-col'>
        <HeroText />
        <BottomText/>
      </div>
    </div>
  )
}

export default Home