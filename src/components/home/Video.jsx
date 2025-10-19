import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
      <video className='h-full w-full object-cover' autoPlay loop src="/public/video.mp4"></video>
    </div>
  )
}

export default Video
