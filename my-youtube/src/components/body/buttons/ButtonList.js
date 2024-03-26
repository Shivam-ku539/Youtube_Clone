import React from 'react'
import Button from './Button'

const list=["All","Live","Game","News","Songs","Cricket","Soccer","Trending","Politics","General Knowledge","Tech","Tech","Tech"]
const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll'>
      {list.map((x)=><Button name={x}/>)
      }
    </div>
  )
}

export default ButtonList