import React, { useContext, useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { PostContext } from '../../store/PostContext'
import { FirebaseContext } from '../../store/FirebaseContext'

function PostDetail() {
    const [user,setUser] = useState(null);
    const {postData} = useContext(PostContext);
    const {firestore,db} = useContext(FirebaseContext);
    useEffect(()=>{
        async function getUser(){
        const query = firestore.query(firestore.collection(db,'users'), firestore.where('id','==',postData.userid))
        const udata = await firestore.getDocs(query)
        udata.forEach((user)=>{
            if(user.id === postData.userid){
                console.log(user.data());
                setUser(user.data())
            }
        })

        }
        console.log(postData);
        getUser()
    },[])

  return (
    <div className='bg-[#eaeaea]'>
    <div className='flex flex-col mx-16 pt-36 '>
      <div className='flex flex-col justify-between md:flex-row w-[100%]'>
        <div className='w-[100%] md:w-[60%]'>
            <img src={postData.imageurl} alt="" className='w-[100%]'/>
        </div>
        <div className='w-[100%] md:w-[35%]'>
            <div className='border-2 p-6 rounded-md border-gray-500 my-4 md:mb-0 md:my-4 bg-white'>
                <h1 className='text-3xl font-bold mb-2'>&#8377;{postData.price}</h1>
                <h4>{postData.productname}</h4>
                <div className='flex justify-between'><p>{postData.location}</p><p>{postData && postData.created.toDate().toString().split(' ').slice(1,3).join(' ')}</p></div>
            </div>
            <div className='border-2 p-6 my-4 rounded-md border-gray-500 bg-white'>
                <h1 className='text-3xl font-bold'>{user ? user.username : ''}</h1>
                <div className='flex justify-between'><button className='tracking-widest border-2 border-[#002F34] my-2 font-semibold rounded-sm p-2 w-[100%]'>CHAT WITH SELLER</button></div>
            </div>
        </div>
      </div>

      <div>
      <div className='my-4 w-[100%] md:w-[60%]'>
            <div className='border-2 p-6 rounded-md border-gray-500 mb-4 md:mb-0 md:my-4 bg-white'>
                <h1 className='text-lg font-bold'>Details</h1>
                <h4>Category : {postData.category}</h4>
            </div>
            <div className='border-2 p-6 rounded-md border-gray-500 mb-4 md:mb-0 md:my-4 bg-white'>
                <h1 className='text-lg font-bold'>Description</h1>
                <h4>{postData.description}</h4>
            </div>
      </div>
      </div>

      
    </div>
    </div>
  )
}

export default PostDetail
