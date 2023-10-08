import React from 'react'
import StarRating from './StarRating'


const Card = ({course}) => {

  return (
    <div className='z-12 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-10  z-1'>
      <a href="#">
        <img src={course.linkImg} className="h-40 w-full object-full"/>
      </a>
      
      <div className='p-5 border border-b'>
        <a href="#">
          <h1 className='font-bold py-2 truncate'>{course.title}</h1>
        </a>
        <StarRating rating={course.rating}/>
      </div>
      <div className="flex justify-center my-4">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 "
        onClick={() => window.open('https://certgen-alpha.vercel.app/', '_blank')}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {course.price}
          </span>
        </button>
      </div>

      {/* <h3 className='p-5 text-xl'>{course.price}</h3> */}
    </div>
  )
}

export default Card