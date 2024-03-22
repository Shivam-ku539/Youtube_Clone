import React, { useEffect, useState } from 'react'
import { YouTube_API } from '../../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const[videos,setVideos]=useState([])

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
   const data=await fetch (YouTube_API)
   const json=await data.json()
   setVideos(json.items)
  //  console.log(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=><VideoCard key={video.id} data={video}/>)}
    </div>
  )
}

export default VideoContainer