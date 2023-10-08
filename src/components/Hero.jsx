import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div id='home' className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 ml-8'>
                <p className='py-2 text-4xl text-[#FF8C00] font-medium ml-2'>  Embark the Future</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Seamless<span className='text-[#20B486]'> Blockchain </span> Certificate Generation and Verification </h1>
                <p className='py-2 text-lg text-gray-600'>Welcome to our cutting-edge platform that revolutionizes the way we generate, store, and verify certificates. 
                    We leverage blockchain technology to ensure the authenticity and security of your credentials
                </p>
            </div>
            {/* <div>
              <img src=''></img>
            </div> */}
            <img  src='/ani1.gif' className="md:order-last  order-first mt-0 " />
        </div>
        <br />
        <br />
        <div id='features'></div>
    </div>
  )
}

export default Hero