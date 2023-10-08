import React from 'react'
// import '../../styles/Anicard.css';

const Anicard = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-4xl font-bold  mb-10'> Key <span className='text-orange-500'> Features </span></h1>
        </div>
        <div className="flex">

            <div className="flex-1 p-4">
                <div className=" bg-[#EEF8F9] p-6 rounded shadow-lg">
                    <div>
                        <h3 className=' text-2xl font-bold'>Secure certificate generation</h3>
                        <p className='py-2'>Generate certificates using blockchain, ensuring data immutability and security</p>
                    </div>
                <div>
                    <img src='/gcs.gif'></img>
                </div>
            </div>
        </div>

            <div className=" flex-1 p-4">
                <div className=" bg-[#FEFBEC] p-6 rounded shadow-lg ">
                    <div>
                        <h3 className=' text-2xl font-bold'>Transparent Verification</h3>
                        <p className='py-6'>Easily verify the authenticity of certificates by validating them on the blockchain</p>
                    </div>
                    <div>
                        <img src='/tts.gif'></img>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4">
                <div className="bg-[#F2F2FF] p-6 rounded shadow-lg">
                    <div>
                        <h3 className=' text-2xl font-bold'>Decentralized Storage</h3>
                        <p className='py-6'>Certificates are stored on a secure and decentralized network for easy access and verification</p>
                    </div>
                    <div>
                        <img src='/dsu.gif'></img>
                    </div>
                    <br />
                    <br />
                </div>
            </div>

            <div className="flex-1 p-4">
                <div className="bg-[#FCF2F2] p-6 rounded shadow-lg">
                    <div>
                        <h3 className=' text-2xl font-bold'>Smart Contracts for Issuance and Validation</h3>
                        <p className='py-2'> Smart contracts verify eligibility and issue certificates efficiently, ensuring accuracy and speed.</p>
                    </div>
                    <div>
                        <img src='/sm2.gif'></img>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
  
  )
}

export default Anicard;
