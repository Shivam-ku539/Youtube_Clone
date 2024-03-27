import React from 'react'
import Button from './Button'

const list=["All","Live","Game","News","Songs","Cricket","Soccer","Trending","Politics","Tech"]
const ButtonList = () => {
  return (
    <div className='flex justify-center'>
      {list.map((x,index)=><Button key={index} name={x}/>)
      }
    </div>
  )
}

export default ButtonList