import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import CommentsContainer from '../CommentsContainer'

const WatchPage = () => {
    const [params,setParams]=useSearchParams();
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='w-screen m-auto overflow-y-scroll scrollbar-thin'>
    <div className='h-80 m-5'>
      <iframe className='rounded-xl shadow-lg m-auto w-full h-full' width="" height="" src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className='m-6'>
      <CommentsContainer/>
      </div>
      </div>  
  )
}

export default WatchPage