import React from 'react'
import Button from './Button'

const list=["All","Live","Game","News","Songs","Cricket","Soccer"]
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((x)=><Button name={x}/>)
      }
    </div>
  )
}

export default ButtonList