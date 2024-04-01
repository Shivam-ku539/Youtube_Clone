import React from 'react'
import ButtonList from './buttons/ButtonList'
import VideoContainer from '../videopart/VideoContainer'

const MainContainer = () => {
  return (
    <div className='w-screen '>
      <div className='mx-4 overflow-x-scroll scrollbar-none'>
        <ButtonList/>
      </div>
      <div className=''>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer