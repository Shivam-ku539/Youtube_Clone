import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({name}) => {
  const mode=useSelector((store)=>store.mode.dark)
  return (
    <div>
        <button className={`px-4 h-11 py-2 m-2 w-max rounded-lg ${mode?'bg-gray-600':'bg-gray-300'}`}>{name}</button>
    </div>
  )
}

export default Button