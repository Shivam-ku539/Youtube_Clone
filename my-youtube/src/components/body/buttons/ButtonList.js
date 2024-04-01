import React from 'react'
import Button from './Button'

const list=["All","Live","Game","News","Songs","Cricket","Soccer","Trending","Politics","Tech","Trending","General Knowledge","Cars","Travel","Career","Motivational"]
const ButtonList = () => {
  return (
    <div className='flex mt-20'>
      {list.map((x,index)=><Button key={index} name={x}/>)
      }
    </div>
  )
}

export default ButtonList