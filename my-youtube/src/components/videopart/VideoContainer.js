import React, { useEffect, useState } from 'react'
import {YouTube_API } from '../../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { videoList } from '../../utils/appSlice';
import ShimmerUi from '../../utils/shimmer/ShimmerUi';

const VideoContainer = () => {
  
  const dispatch=useDispatch()
  const videos=useSelector(store=>store.app.video)
  console.log(videos)
  // const[videos,setVideos]=useState([])
  
  useEffect(()=>{
    getVideos();
  },[])
  
  const getVideos=async()=>{
    const data=await fetch (YouTube_API)
    const json=await data.json()
    dispatch(videoList(json.items))
    // setVideos(json.items)
  }
  // videos.length==0?<ShimmerUi/>:
   return videos.length===0?<ShimmerUi/> : ( 
    <div className='flex flex-wrap justify-center'>
      {videos.map((video)=><Link key={video.id} to={"/watch?v="+video.id}><VideoCard  data={video}/></Link>)}
    </div>
  )
}

export default VideoContainer