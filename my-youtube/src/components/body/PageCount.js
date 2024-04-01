import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { pageIndex } from '../../utils/appSlice';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const PageCount = () => {
  const pageNo=useSelector(store=>store.app.pageNumber)
  // console.log(pageNo)
  const dispatch=useDispatch()
  const videos=useSelector(store=>store.app.video)
  const numberOfContent=useSelector(store=>store.app.numberOfContentIn_a_page)

const pageGo=(n)=>{
  console.log(n)
  dispatch(pageIndex(n))
}
  return (
    <div>
       <ChevronLeftOutlinedIcon className={`${pageNo==1?'invisible':'visible'}`} onClick={()=>{
        pageGo(pageNo-1)
       }} />
      {
     [...Array(videos.length/numberOfContent)].map((_,i)=>{
      return <span onClick={()=>pageGo(i+1)} className={`px-2 border border-gray-300 rounded-md mx-[1px] hover:cursor-pointer ${pageNo-1==i ?"bg-white text-black":'bg-black' } `} key={i}>{i+1}</span>
     })
    }
    <ChevronRightOutlinedIcon className={`${pageNo==videos.length/numberOfContent?'invisible':'visible'}`} onClick={()=>{
        pageGo(pageNo+1)
       }}/>
    </div>
  )
}

export default PageCount