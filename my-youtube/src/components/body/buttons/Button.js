import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({name}) => {
  const mode=useSelector((store)=>store.mode.dark)
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-600 rounded-lg '>{name}</button>
    </div>
  )
}

export default Button