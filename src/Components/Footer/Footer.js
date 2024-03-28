import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col  w-[100%]'>
      <div className='p-6 gap-16 flex justify-center flex-wrap bg-[#EBEEEF] '>
          <div className=' flex flex-col h-[100%] w-[220px]'>
            <h6 className='font-semibold'>POPULAR LOCATIONS</h6>
            <a href="#" className='text-xs'>Kolkata</a>
            <a href="#" className='text-xs'>Mumbai</a>
            <a href="#" className='text-xs'>Chennai</a>
            <a href="#" className='text-xs'>Pune</a>
          </div>
          <div className=' flex flex-col h-[100%] w-[220px]'>
            <h6 className='font-semibold'>TRENDING LOCATIONS</h6>
            <a href="#" className='text-xs'>Kolkata</a>
            <a href="#" className='text-xs'>Mumbai</a>
            <a href="#" className='text-xs'>Chennai</a>
            <a href="#" className='text-xs'>Pune</a>
          </div>
          <div className=' flex flex-col h-[100%] w-[220px]'>
            <h6 className='font-semibold'>ABOUT US</h6>
            <a href="#" className='text-xs'>Contact Us</a>
          </div>
          <div className=' flex flex-col h-[100%] w-[220px]'>
            <h6 className='font-semibold'>OLX</h6>
            <a href="#" className='text-xs'>Blog</a>
            <a href="#" className='text-xs'>Help</a>
            <a href="#" className='text-xs'>Sitemap</a>
            <a href="#" className='text-xs'>Legal & Privacy Information</a>
            <a href="#" className='text-xs'>Vulnerability Disclosure Program</a>
          </div>
          <div className=' flex flex-col h-[100%] w-[220px]'>
            <h6 className='font-semibold'>FOLLOW US </h6>
            <div className='my-2 flex gap-4'><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-youtube"></i></div>
          </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between py-4 px-20 bg-[#002F34] h-[3rem]'>
        <p className='text-xs text-white'>Help -Sitemap</p>
        <p className='text-xs text-white'>All rights reserved &#169; 2006-2024 OLX</p>
      </div>
    </div>
  )
}

export default Footer
