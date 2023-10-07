import React from 'react';

const Profeature = () => {
  return (
    <div id='features' className='w-full bg-gradient-to-r from-gray-100 to-gray-300 py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
        <h1 className='text-center text-4xl font-bold  mb-20'> Key <span className='text-orange-500'> Features </span></h1>
            <div className='flex gap-2'>
              <section>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg object-cover h-60" src= "https://png.pngitem.com/pimgs/s/27-279464_security-hd-png-download.png" alt="" /> 
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Secure Certificate Generation</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Generate certificates using blockchain, ensuring data immutability and security</p>
                      
                  </div>
                </div>
              </section>

              <section>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg object-cover h-60" src= 'https://pixelplex.io/wp-content/uploads/2021/02/dms-data-backup.jpg' alt="" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Transparent Verification</h5>
                      </a>
                      <p className="mb-11 font-normal text-gray-700 dark:text-gray-400">Easily verify the authenticity of certificates by validating them on the blockchain</p>
                  </div>
                </div>
              </section>

              <section>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg object-cover h-60" src= "https://pixelplex.io/wp-content/uploads/2021/08/benefits-of-decentralized-storage.png" alt="" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Decentralized Storage</h5>
                      </a>
                      <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Certificates are stored on a secure and decentralized network for easy access and verification</p>
                  </div>
                </div>
              </section>

              

              <section>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg object-cover h-60" src= "https://media.istockphoto.com/id/1200699832/vector/user-experience-related-vector-illustration-flat-modern-design.jpg?s=612x612&w=0&k=20&c=ynymjfFKxiFhZS4HcyP-AuyBzQHimeKNWdSrLz7R8eU=" alt="" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User-Friendly Interface</h5>
                      </a>
                      <p className="mb-11 font-normal text-gray-700 dark:text-gray-400">A simple and intuitive platform for both certificate issuers and recipients</p>
                  </div>
                </div>
              </section>
            </div>
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

export default Profeature;