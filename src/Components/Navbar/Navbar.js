import React, { useEffect, useState } from 'react'
import Arrow from '../../Assets/Arrow'

function Navbar() {
  const [show,setShow] = useState(false);

  return (
    <div className='w-[100%] h-[5vh] shadow-md mt-2 flex items-center justify-center absolute top-20 z-0'>
      <div className=' h-[80%] relative w-[70%] text-center xl:w-[20%] xl:text-right pr-4'>
        <span className='font-semibold me-2' onClick={()=>setShow(!show)}>ALL CATEGORIES</span>
        <Arrow styling={'top-1 '}/>
      </div>
      <div className={`hidden xl:flex ms-5 h-[80%] justify-start w-[80%] gap-4 text-sm items-center`}>
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: House and Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: House and Apartments</span>
      </div>  
      <div className={`${show ? 'flex' :'hidden'} flex-col ms-5  justify-start w-[80%] gap-4 text-sm items-center absolute top-10 bg-[#e2e2e2cc] z-20`}>
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: House and Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: House and Apartments</span>
      </div>  
    </div>
  )
}

export default Navbar
