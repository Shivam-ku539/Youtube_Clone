import React from 'react'
import { useSelector } from 'react-redux'

const VideoCard = ({data}) => {
    // console.log(data)
    const {snippet}=data
    const {channelTitle,title,thumbnails,publishedAt}=snippet
    const providedDate=new Date(publishedAt)
    const currentDate=new Date()
    const timeDifference=currentDate-providedDate
    const daysDifference=Math.floor(timeDifference/(1000*60*60*24))
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(daysDifference / 365);
    let result=''
    if (daysDifference==1){
      result=`${daysDifference} day ago`
    }
    else if(daysDifference>1 && daysDifference<8){
      result=`${daysDifference} days ago`
    }
    else if(daysDifference>7 && daysDifference<13){
      result=`1 week ago`
    }
    else if(daysDifference>13 && daysDifference<21){
      result=`2 weeks ago`
    }
    else if(daysDifference>21 && daysDifference<29){
      result=`3 weeks ago`
    }
    else if(monthsDifference==1){
      result=`${monthsDifference} month ago`
    }
    else if (monthsDifference>1 && monthsDifference<=12){
      result=`${monthsDifference} months ago`
    }
    else if(yearsDifference==1){
      result=`${yearsDifference} year ago`
    }
    else if(yearsDifference>1){
      result=`${yearsDifference} years ago`
    }

    const mode=useSelector((store)=>store.mode.dark)
    return (
    <div className={`p-2 m-2 w-[350px] h-96 shadow-lg rounded-md ${mode ? 'bg-gray-900':'bg-white'}`}>
        <img className='rounded-lg m-auto' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
          <li className='font-bold py-2'>{title}</li>
          <li className='font-semibold'>{channelTitle}</li>
          <li>{result}</li>
        </ul>
    </div>
  )
}

export default VideoCard