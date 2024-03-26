import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import CommentsContainer from '../CommentsContainer'

const WatchPage = () => {
    const [params,setParams]=useSearchParams();
    console.log(params)
    console.log(params.get("v"))
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='ml-24 mt-8'>
    <div className=''>
      <iframe className='rounded-xl shadow-lg' width="560" height="315" src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <CommentsContainer/>
      </div>  
  )
}

export default WatchPage