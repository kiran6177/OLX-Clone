import React, { useContext, useState } from 'react'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext'
import { uploadBytes,ref,getDownloadURL } from 'firebase/storage'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom'

function PostForm() {
    const [error,setError] = useState('')
    const [productname,setProductname] = useState('')
    const [category,setCategory] = useState('Cars')
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [price,setPrice] = useState(1)
    const [image,setImage] = useState(null)
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()
    const {firestore,storage,db} = useContext(FirebaseContext)
    const {user} = useContext(AuthContext)

    const handlePost = ()=>{

        if(!productname || !category || !location || !description || !price || !image){
            setError('Please fill all the fields.')
            console.log(image);
        }else{
            console.log(productname, category, description, price, image);
            setLoading(true)
            const currDate = Date.now()

            const storageRef = ref(storage, `productimages/${currDate+image.name}`);
            uploadBytes(storageRef,image)
            .then((data)=>{
                getDownloadURL(ref(storage,`productimages/${currDate+image.name}`))
                .then(async(url)=>{
                    console.log(url);
                    const proid = uuidv4()
                    await firestore.setDoc(firestore.doc(db,'products',proid),{
                        id:proid,
                        productname,
                        category,
                        price,
                        description,
                        imageurl:url,
                        location:location,
                        created:new Date(currDate),
                        userid:user.uid
                    })
                    setLoading(false)
                    navigate('/')
                })
                .catch(err=>{
                    console.log(err.message);
                })
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    
  return (
<div className='flex min-h-[100vh] h-[100%] w-[100%] items-center justify-center py-32'>
      <div className='border-2 border-black h-[75%] w-[70%] p-8'>
            <div className=' pt-2 flex items-center justify-start '>
                <h3 className='text-3xl font-semibold'>CREATE POST</h3>
            </div>
            <div className='flex flex-col my-3 w-[50%]'>
                <label>Product Name</label>
                <input type="text" value={productname} onChange={(e)=>setProductname(e.target.value)} placeholder='Enter your username'  className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            <div className='flex flex-col my-3 w-[50%]'>
                <label>Category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}  className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'>
                    <option key='1' value="Cars" >Cars</option>
                    <option key='2' value="Bikes" >Bikes</option>
                    <option key='3' value="Home Appliances" >Home Appliances</option>
                    <option key='4' value="Electronics" >Electronics</option>
                    <option key='5' value="Mobile Phones" >Mobile Phones</option>
                    <option key='6' value="Others" >Others</option>

                </select>
            </div>
            <div className='flex flex-col my-3 w-[50%]'>
                <label>Description</label>
                <textarea cols={'20'} rows={'5'} value={description} onChange={(e)=>setDescription(e.target.value)} className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'>
                </textarea>
            </div>
            <div className='flex flex-col my-3 w-[50%]'>
                <label>Location</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Enter your location'  className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            <div className='flex flex-col my-3 w-[50%]'>
                <label>Price</label>
                <input type="number" placeholder='&#8377;100' value={price} onChange={(e)=>setPrice(parseInt(e.target.value))}  className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            <div className='flex flex-col my-3 w-[50%]'>
                <label>Photos</label>
                <img src={image ? URL.createObjectURL(image) : ''} alt="" className=' w-[200px] my-8'/>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}  className='border-2 border-[#002F34] rounded-md text-xs py-2 ps-3'/>
            </div>
            {error && <p className='text-xs text-[#ff4646]'>{error}</p>}
            <div className='flex flex-col my-3 '>
                <button onClick={handlePost} disabled={loading}  className={`border-2 my-2 bg-[#002f34] text-white py-2 font-bold tracking-widest transition ease-in-out delay-350  ${!loading && 'hover:bg-white hover:text-[#002F34] hover:border-2 hover:border-[#002F34]'} ${loading && 'bg-[#002F34]/50 '}`}>POST</button>
                {loading && <p className='text-center text-sm tracking-widest font-semibold text-[#002F34]'>Posting...</p>}
            </div>
      </div>
    </div>
  )
}

export default PostForm
