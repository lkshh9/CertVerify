import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <div id='about' className='w-full bg-white py-20'>
      <h1 className='text-center text-4xl font-bold  mb-10 '> About<span className=' text-center text-green-500'> Us </span></h1>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={cta} className="w-[650px] mx-auto" />

        
        <div>
            <p className='py-2  text-lg text-gray-800 '>We are a team dedicated to leverage blockchain technology to streamline the certificate generation and validation process. Our mission is to enhance trust and credibility in certificates across various domains.</ p>
            {/* <p className='py-2 '>Start learning by registering for free</p> */}
            <button className='max-[700px]:w-full my-4 px-6 py-3 rounded-md bg-[#20B486] text-white font-bold'>Join Us</button>

             
        </div>
        



    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    

</div>
  )
}

export default CTA