import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
      <div className='w-ful text-center text-white'>
             <h1 className='text-6xl'>NotFound</h1>
             <Link to="/" className='btn bg-white mt-4 inline-block  p-3 text-gray-800 hover:bg-gray-500 rounded hover:text-white'>Back to Home</Link>
      </div>
 
  )
}

export default NotFound