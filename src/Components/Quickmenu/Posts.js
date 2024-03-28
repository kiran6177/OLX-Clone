import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from '../../store/PostContext'

function Posts(props) {
  const {data} = props
  const {setPostData} = useContext(PostContext)


  return (
    <div className='h-[19rem] bg-white w-[18rem] p-4 relative z-0'>
      <div className='w-[100%] flex items-center justify-center h-[60%]'>
        <Link to={`postdetail?id=${data.id}`} onClick={()=>setPostData(data)}><img src={data.imageurl} alt="" className='w-[100%]' /></Link>
      </div>
      <div className='h-[30%] mt-2'>
        <h3 className='my-2 font-bold'>{data.price}</h3>
        <h6 className='text-ellipsis overflow-hidden whitespace-nowrap text-[#666] text-sm my-1'>{data.productname}</h6>
        <p className='text-ellipsis overflow-hidden whitespace-nowrap text-[#666] text-sm my-1'>{data.description}</p>
      </div>
      <div className='h-[5%] flex justify-between text-xs'><h6>{data.location}</h6><h6>{data.created.toDate().toString().split(' ').slice(1,3).join(' ')}</h6></div>
      <div className='bg-white rounded-full w-[30px] h-[30px] absolute right-3 top-3 flex items-center justify-center'><i className="fa-regular fa-heart"></i></div>
    </div>
  )
}

export default Posts
