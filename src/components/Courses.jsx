import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div id='demo' className='w-full bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300 py-10'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-2'>
            <h1 className=' text-center py-3 text-4xl font-bold'> Project <span className=' text-center text-sky-500'> Demo </span></h1>
              {/* <h1 className=' text-center py-3 text-3xl font-bold'>Government training <span className=' text-center text-[#20B486]'>Courses</span></h1> */}
              <p className='text-center font-bold text-1xl  my-8'>Complete a sample Government training course listed below and get your certificate on blockchain after completion</p>
            </div>

            <Slider {...settings} className='px-5'>
              {courses.map((course,i)=>
                <div key={i}>
                  <Card course={course} />
                </div> ) }
            </Slider>
            
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Courses