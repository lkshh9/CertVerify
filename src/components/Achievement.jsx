import React from 'react'

const Achievement = () => {
  return (
    <div id='work' className='w-full bg-white py-24 '>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center ml-7 '>
                <h1 className='text-center text-4xl font-bold  mb-10 '> How it <span className=' text-center text-orange-500'> Works </span></h1>
                <p className=' text-center text-lg text-gray-600'>Effortless Certificates generation, Trustworthy Verification</p>
                
                <div className='grid grid-cols-2 py-10'>
                    <div className='py-6 flex'>
                        <div className='px-3'>
                            
                                <h2 className='text-2xl font-semibold mb-3'> 1. Certificate Generation</h2>
                                <ul className="list-disc" > 
                                    <li className='ml-10'>Easily create certificates for various training programs through our intuitive interface.</li>
                                    <li className='ml-10'>Input participant details and course information, and let our system generate the certificate securely</li>
                                </ul>
                            
                        </div>

                    </div>
                    <div className='py-6 flex'>
                    
                            <div className='px-3'>
                                
                                    <h2 className='text-2xl font-semibold mb-3'> 2. Blockchain Integration</h2>
                                    <ul className="list-disc" > 
                                        <li className='ml-10'>We utilize blockchain technology to store certificates in a tamper-proof and transparent manner.</li>
                                        <li className='ml-10'>The certificate data is hashed and stored on the blockchain, ensuring its integrity and authenticity.</li>
                                    </ul>
                                
                            </div>
                    </div>
                    <div className='py-6 flex'>
                        <div className='px-3'>
                           
                                <h2 className='text-2xl font-semibold mb-3'> 3. Certificate Verification</h2>
                                <ul className="list-disc" > 
                                    <li className='ml-10'>Anyone with access to the certificate can easily verify its authenticity by checking the blockchain-stored hash</li>
                                    <li className='ml-10'>A quick and reliable way to combat fake certificates and enhance trust in the certification process</li>
                                </ul>
                            
                        </div>
                    </div>
                    <div className='py-6 flex'>
                        <div className='px-3'>
                            
                                <h2 className='text-2xl font-semibold mb-3'> 4. Certificate Access and Sharing </h2>
                                <ul className="list-disc" > 
                                    <li className='ml-10'>Once generated and stored on the blockchain, certificates can be easily accessed and securely shared with relevant stakeholders</li>
                                    <li className='ml-10'>Authorized individuals can view and validate the certificate's details</li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
           </div>
            
             
             <img  src= "https://img.freepik.com/free-vector/process-concept-illustration_114360-4307.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1696377600&semt=ais" className="m-auto md:order-last  order-first object-full" />




        </div>
        

    </div>
  )
}

export default Achievement