import React, { useEffect, useState } from 'react'
import { Video_Search_API, YouTube_API } from '../../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { videoList } from '../../utils/appSlice';

const VideoContainer = () => {
  
  const dispatch=useDispatch()
  // const[videos,setVideos]=useState([])
  const videos=useSelector(store=>store.app.videoList)
  console.log(videos)

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
   const data=await fetch (YouTube_API)
   const json=await data.json()
   dispatch(videoList(json.items))
  //  setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap '>
      {videos.map((video)=><Link to={"/watch?v="+video.id}><VideoCard key={video.id} data={video}/></Link>)}
    </div>
  )
}

export default VideoContainer