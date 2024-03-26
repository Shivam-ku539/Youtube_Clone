import React from 'react'

const VideoCard = ({data}) => {
    // console.log(data)
    const {snippet}=data
    const {channelTitle,title,thumbnails,publishedAt}=snippet
  return (
    <div className='p-2 m-2 w-[350px] h-96 shadow-lg rounded-md'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
          <li className='font-bold py-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{publishedAt}</li>
        </ul>
    </div>
  )
}

export default VideoCard