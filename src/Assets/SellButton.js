import React from 'react'
import { useNavigate } from 'react-router-dom'

function SellButton() {
  const navigate = useNavigate()
  return (
    <button className='border-8  border-l-yellow-400 border-b-blue-700 border-r-blue-700 border-t-blue-400 rounded-full px-4 py-1 pl-8 font-bold' onClick={()=>navigate('/createpost')}>SELL</button>
  )
}

export default SellButton
