import React from 'react'

const Cards = () => {
  return (
    <div className='bg-gray-400 w-72 h-72 m-6 rounded-lg shadow-lg animate-pulse pt-5 flex-col'>
        <div className='w-60 h-44 bg-gray-500  rounded-lg m-auto'></div>
        <div className='w-60 h-3 rounded-2xl ml-6 mt-3 bg-gray-300'></div>
        <div className='w-52 h-3 rounded-2xl ml-6 mt-3 bg-gray-300'></div>
        <div className='w-60 h-3 rounded-2xl ml-6 mt-3 bg-gray-300'></div>
    </div>
  )
}

export default Cards